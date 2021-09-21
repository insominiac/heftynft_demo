import React, { useEffect, useState } from 'react';
import auction from './auction';
import web3 from './web3';


export default function Auctiondata(){
    


    const [owner, setOwner] = useState('');
    const [startBlock, setStartBlock] = useState('');
    const [endBlock, setEndBlock] = useState('');
    const [ipfsHash, setIpfsHash] = useState('');
    const [floorprice, setFloorprice] = useState('');
    const [contractBalance, setContractBalance] = useState('');

    useEffect(() => {
          const init = async () => {
          const owner = await auction.methods.owner().call();
          const startBlock = await auction.methods.startBlock().call();
          const endBlock = await auction.methods.endBlock().call();
          const ipfsHash = await auction.methods.ipfsHash().call();
          const floorprice = await auction.methods.floorprice().call();
          const balance = await web3.eth.getBalance(auction.options.address);

          setOwner(owner);
          setStartBlock(startBlock);
          setEndBlock(endBlock);
          setIpfsHash(ipfsHash);
          setFloorprice(floorprice);
          setContractBalance(balance);
        };
        init();
      }, []);

      const bl = async() =>{
       
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]) 
      }

      return(
        
          <>
         <h1>{owner} </h1>

         <p>
     {this.bl}
      </p>            
          </>
      )

}