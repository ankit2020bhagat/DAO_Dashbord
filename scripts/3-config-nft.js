// import sdk from "./1-initialize-sdk.js";
// import { readFileSync } from "fs";

// (async () =>{
//     try{
//         const editionDrop = await sdk.getContract("0x44ea3a6f30E53130FB6b675087771e92E451C23A","edition drop");
//         await editionDrop.createBatch([
//             {
//                 name : "Leaf Village HeadBand",
//                 description : "This NFT will give you access to akaDao",
//                 image : readFileSync("scripts/assets/bike-mountain.png"),
//             },
//         ]);
//         console.log("✅ Successfully created a new NFT in the drop!");
//     }catch(error){
//         console.log("failed to create the new NFT",error);
//     }
// })

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x44ea3a6f30E53130FB6b675087771e92E451C23A", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to akaDAO!",
        image: readFileSync("scripts/assets/bike_mountain.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();