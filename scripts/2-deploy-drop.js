import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
        
        name: "aka Membership",
        // A description for the collection.
        description: "A DAO for fans of aka.",
        
        image: readFileSync("scripts/assets/aka.png"),
        
        primary_sale_recipient: AddressZero,
      });
    const editionDrop = await sdk.getContract(editionDropAddress,"edition-drop");
    const metadata = await editionDrop.metadata.get();
    console.log("sucessfully deploy edition drop contract ,address",editionDropAddress,);
    console.log("edition drop Metadata:",metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
//0x5bbA1499fcE90b308D6c860B2AF4a0B9A5fDcD05