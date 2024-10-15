import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Onboarding() {
  return (
    <div className="flex flex-col justify-center items-center  text-white h-screen w-screen ">
      <h1 className="text-black">Onboarding 2</h1>

      <div className="flex flex-col items-center justify-center bg-slate-700 h-screen w-2/6 rounded-lg space-y-4">
        <h1 className="text-4xl">Select a Network</h1>
        <div className=" flex justify-center items-center  space-x-4 w-full">
          <Link href="/Onboarding/Step3" passHref>
            <Button className=" rounded-3xl px-4 py-3">Solana</Button>
          </Link>

          <Link href="/Onboarding/Step3" passHref>
            <Button className=" rounded-3xl px-4 py-3">Ethereum</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
