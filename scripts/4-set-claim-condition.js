import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

(async() =>{
    try{
        const editionDrop = await sdk.getContract("0x44ea3a6f30E53130FB6b675087771e92E451C23A","edition-drop");

        const claimConditions = [{
            startTime : new Date(),
            maxClaimable : 50_000,
            price : 0,
            maxClaimablePerWallet : 1,
            waitInSecond : MaxUint256,
        }]

       await editionDrop.claimConditions.set("0",claimConditions);
       console.log("✅ Sucessfully set claim condition!");


    }catch(error){
        console.log(error);
    }
})()