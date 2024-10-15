import { Button } from "@/components/ui/button";
import Link from "next/link";

// ("use client");
export default function Onboarding1() {
  return (
    <div className="flex flex-col justify-center items-center  text-white h-screen w-screen ">
      <h1>Onboarding 1</h1>

      <div className="flex flex-col items-center justify-center bg-slate-700 h-screen w-2/6 rounded-lg space-y-4">
        <h1 className="text-xl mb-4">Lets get started</h1>

        <div className="flex flex-col  space-y-4 ">
          <Link href={"/Onboarding/Step2"} passHref>
            <Button className=" w-full px-4 py-3"> Create a new wallet</Button>
          </Link>
          <Link href={"/Onboarding/Step2"} passHref>
            <Button className=" w-full px-4 py-3"> Import a wallet</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
