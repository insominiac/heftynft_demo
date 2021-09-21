import React, { Component, useEffect, useState } from 'react';
import web3 from "./web3"
import auctionfactory from "./auctionfactory"
import auction from './auction';

 class Admin extends Component {


  constructor(props) {
    super(props)

    this.state = {
        currentAccount: '',
        currentAccountBalance: 0,
        currentAccountBids: {},
        accounts: [],
        auctions: [],
        auctionEventListeners: {},
        value: 1,
    }

  //  this.onChangeAccount = this.onChangeAccount.bind(this)
    this.onClickCreateAuction = this.onClickCreateAuction.bind(this)
    this.getAllAuctions = this.getAllAuctions.bind(this)
  //  this.getAuction = this.getAuction.bind(this)
  //  this.cancelAuction = this.cancelAuction.bind(this)
  //  this.getAccountBids = this.getAccountBids.bind(this)
  //  this.onLogBid = this.onLogBid.bind(this)

   
  }
       address=null
      _inputReserve = null
      _inputBidIncrement = null
      _inputStartBlock = null
      _inputEndBlock = null
      _inputBidAmount = null
      _inputFloorPrice = null
      _inputIpfsHash = null



   // this.onChangeAccount = this.onChangeAccount.bind(this)
   // this.onClickCreateAuction = this.onClickCreateAuction.bind(this)
   // this.getAllAuctions = this.getAllAuctions.bind(this)
   // this.getAuction = this.getAuction.bind(this)
  // this.cancelAuction = this.cancelAuction.bind(this)
  //  this.getAccountBids = this.getAccountBids.bind(this)
  //  this.onLogBid = this.onLogBid.bind(this)

  
     onClickCreateAuction = async() => {

      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      console.log(accounts)
      console.log(balance)
      
           await auctionfactory.methods.createAuction(
            
            this._inputOwner.value,
            this._inputStartBlock.value,
            this._inputEndBlock.value,
            this._inputIpfsHash.value,
            this._inputFloorPrice.value,


          ).send( { from: accounts[0], gas:1000000}, function (err, res){ 
            if (!err) {
            console.log(res);
            
          }else{
            console.log(err);
            
          }}) // transaction object not needed


         }

         getAllAuctions = async() => {
          
              await auctionfactory.methods.deployedAuctions(this.address).send(function(error, result){
                if (!error) {
                  console.log(result);
                  
                }else{
                  console.log(error);
                  
                }

              })// transaction object not needed
         }
    render(){

      return(

        <div className="admin wrapper">
            <div className="admin_container">
            <h2>Create auction</h2>
                    <div>
                       <label> Owner </label>
                        <input className="" type="text" ref={x => this._inputOwner = x} />
                    </div>
                    <div>
                        <label>Start block </label>
                        <input type="text" ref={x => this._inputStartBlock = x}  />
                    </div>
                    <div>
                        <label> End block </label>
                         <input type="text" ref={x => this._inputEndBlock = x}  />
                    </div>
                    <div>
                       <label> Ipfs Hash</label>
                         <input type="text" ref={x => this._inputIpfsHash = x} />

                    </div>
                    <div>
                          <label>Floor Price</label>
                           <input type="text" ref={x => this._inputFloorPrice = x} />

                    </div>

                    <button onClick={this.onClickCreateAuction}>Create Auction</button>
                    <div>
                          <label>Enter Adress</label>
                           <input type="text" ref={x => this.address = x} />

                    </div>
                    <button onClick={this.getAllAuctions}>Get Auctions</button>

        
        </div>

        <table>
                    <thead>
                        <tr>
                            <td>Owner Address</td>
                            <td>Start block</td>
                            <td>End block</td>
                            <td>IPFS String</td>
                            <td>Your bid</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.auctions.map(auction => {
                        let status = 'Running'
                        if (auction.canceled) {
                            status = 'Canceled'
                        } else if (this.props.web3.eth.blockNumber > auction.endBlock) {
                            status = 'Ended'
                        } else if (this.props.web3.eth.blockNumber < auction.startBlock) {
                            status = 'Unstarted'
                        }
                        return (
                            <tr key={auction.address}>
                                <td>{auction.address.substr(0, 6)}</td>
                                <td>{auction.startBlock}</td>
                                <td>{auction.endBlock}</td>
                                <td>{auction.bidIncrement} ETH</td>
                                <td>{auction.highestBid} ETH</td>
                                <td>{auction.highestBindingBid} ETH</td>
                                <td>{auction.highestBidder.substr(0, 6)}</td>
                                <td>{this.state.currentAccountBids[auction.address]}</td>
                                <td>{status}</td>
                                <td>
                                    {auction.owner == this.state.currentAccount && (status === 'Running' || status === 'Unstarted') &&
                                        <button onClick={() => this.cancelAuction(auction)}>Cancel</button>
                                    }
                                    <div>
                                        <input ref={x => this._inputBidAmount = x} />
                                        <button onClick={() => this.onClickBid(auction)}>Bid</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

       </div>
    )
    }
    
}

export default Admin