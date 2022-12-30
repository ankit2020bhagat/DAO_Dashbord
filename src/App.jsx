
import { useAddress, ConnectWallet, useContract, useNFTBalance } from '@thirdweb-dev/react';
import { useState, useEffect, useMemo } from 'react';
const App = () => {

  const address = useAddress();
  console.log("Address :",address);
  const editionDropAddress = "0x5bbA1499fcE90b308D6c860B2AF4a0B9A5fDcD05";
  const {contract : editionDrop } = useContract(editionDropAddress,"edition-drop");

  const {data : nftBalance } = useNFTBalance(editionDrop,address,"0");
  const hasClaimedNFT = useMemo(() =>{
    return nftBalance && nftBalance.gt(0)
  },[nftBalance])


  if(!address) {
    return (
      <div className='landing'>
        <h1>
          Welcome to NarutoDAO
        </h1>
        <div className='btn-hero'>
          <ConnectWallet/>
        </div>
      </div>
    );
  }
  return (
    <div className="landing">
      <h1>Welcome to My DAO</h1>
    </div>
  );
};

export default App;
