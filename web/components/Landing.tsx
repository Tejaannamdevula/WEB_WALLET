import React from "react";
import { Button } from "./ui/button";

export const Landing = (): JSX.Element => {
  return (
    <div className="flex flex-col  items-center justify-center h-screen w-screen   -mt-20">
      <h1 className="text-6xl font-bold mb-4">Welcome to hush</h1>

      <p className="  text-center max-w-lg">
        Hush is purpose built tool for wallet creation
      </p>
      <p className="max-w-md mb-4">It supports multiple blockchains</p>
      <Button className="px-6 py-3"> Get Started</Button>
    </div>
  );
};
