import next from 'next'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import Logo from './logo'
import styles from './layout.module.css'
import { providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import WalletLink from 'walletlink'
import { useCallback, useEffect, useReducer } from 'react'
import { ellipseAddress, getChainData } from '../lib/utilities'
import Signin from './modals/signin';
import Signup from './modals/signup';
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const INFURA_ID = '3a46f37e8e254666a4f6b2a1d9682870'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
}


let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
}

type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}



export default function Header(){

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);



  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, address, chainId } = state

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleChainChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  const chainData = getChainData(chainId)



    return <header className={styles.header}>
      <Navbar collapseOnSelect  expand="lg"  fixed="top" variant="dark">
        <div className={styles.container}>
      <div className="row align-items-center">
        <div className="col-auto">
          <Navbar.Brand href="/" className="logo">
          <Image src="/images/logo.png"  height={32} 
          width={210}
           alt="Logo"/>
          </Navbar.Brand>
          </div>
          <div className="col-auto ml-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.nav_links}>
              <Nav.Link className={styles.list} href="/drop">Drops</Nav.Link>
              <Nav.Link className={styles.list} href="/artist">Artists</Nav.Link>
              <Nav.Link className={styles.list} href="/about">About us</Nav.Link>
              </Nav>
              <div className={styles.search_bar}>
                <button type="button" className={styles.btnsearch}></button>
              </div>
              <div className="actions d-none d-md-inline-block">
              <a className="btn btn-field btn-blue" type="button" onClick={() => setModalShow(true)}>
                 Sign In
               </a>
           <a className="btn btn-outline btn-blue" type="button" onClick={() => setModalShow1(true)}>
                     Sign Up
              </a>
              <Signin
                  show={modalShow}
                  onHide={() => setModalShow(false)} />
                 <Signup
                  show={modalShow1}
                  onHide={() => setModalShow1(false)} />
              </div>
          </Navbar.Collapse>
          </div>
          </div>
        </div>
    </Navbar>
    
  </header>
            
}