import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === ""){
    console.log("Private keys not found");
}
if(!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL ===""){
    console.log("alchemy api not found");
}
if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS ===""){
    console.log("wallet address not found");
}

const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.PRIVATE_KEY,

    process.env.ALCHEMY_API_URL
);

(async () => {
    try{
        const address = await sdk.getSigner().getAddress();
        console.log("SDK inittialize by address",address);
    } catch(err){
        console.error("Failed to get apps from sdk",err);
        process.exit(1);
    }
})();

export default sdk;