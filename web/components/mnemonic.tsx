"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

import { generateMnemonic, mnemonicToSeedSync } from "bip39";

export const Mnemonic = (): JSX.Element => {
  const [mnemonic, setMnemonic] = useState<string>("");

  //   const [index, setIndex] = useState<number>(0);

  const generateNewMnemonic = async (): Promise<void> => {
    const mn = await generateMnemonic();

    console.log(mn);

    console.log(`type of ${typeof mn}`);

    setMnemonic(mn);
  };
  return (
    <div className="flex flex-col items-center">
      <h1>Mnemonic</h1>
      <Button onClick={generateNewMnemonic}> Generate Mnemonic </Button>
      {mnemonic && <p>{mnemonic}</p>}

      {/* <Button>Add Wallet</Button> */}
    </div>
  );
};
