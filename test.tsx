"use client";

import TransgateConnect from "@zkpass/transgate-js-sdk";

const verify = async () => {
  try {
    // The appid of the project created in dev center
    const appid = "ac41520c-4037-45d6-a89d-e62279cefe4f";

    // Create the connector instance
    const connector = new TransgateConnect(appid);

    // Check if the TransGate extension is installed
    // If it returns false, please prompt to install it from chrome web store
    const isAvailable = await connector.isTransgateAvailable();

    if (isAvailable) {
      // The schema id of the project
      const schemaId = "0c80bfc36a9b4edfa0cc9dae96b5439e";

      // Launch the process of verification
      // This method can be invoked in a loop when dealing with multiple schemas
      const res = await connector.launch(schemaId);
      console.log(res);
      // verifiy the res onchain/offchain based on the requirement
    } else {
      console.log("Please install TransGate");
    }
  } catch (error) {
    console.log("transgate error", error);
  }
};

export default function Zkschema() {
  return <button onClick={verify}>Zkschema</button>;
}
