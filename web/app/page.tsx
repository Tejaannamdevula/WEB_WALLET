// import Image from "next/image";

// import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"] });

import { Landing } from "@/components/Landing";
// import { Mnemonic } from "@/components/mnemonic";

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-xl"> hello world!!</h1> */}
      {/* <Mnemonic /> */}

      <Landing />
    </main>
  );
}
