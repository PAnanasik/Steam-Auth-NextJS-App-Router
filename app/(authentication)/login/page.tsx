"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { SiSteam } from "react-icons/si";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    return router.push("/auth/steam");
  };

  return (
    <main className="">
      <div
        className="w-[450px] min-h-[30px] rounded-md bg-background border border-white border-opacity-[0.1] p-8
      space-y-8"
      >
        <h2 className="text-center text-lg font-medium">Authorization</h2>
        <Input placeholder="Your name..." disabled />
        <Input placeholder="Your name..." disabled />
        <Button className="w-full">Authorize</Button>
        <Button className="w-full flex items-center" onClick={() => onClick()}>
          <SiSteam className="w-4 h-4 mr-2" />
          Authorize with Steam
        </Button>
      </div>
    </main>
  );
}
