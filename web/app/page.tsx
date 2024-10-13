// import Image from "next/image";

import { Mnemonic } from "@/components/mnemonic";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center w-screen h-screen ">
      <h1 className="text-xl"> hello world!!</h1>
      <Mnemonic />
    </main>
  );
}
