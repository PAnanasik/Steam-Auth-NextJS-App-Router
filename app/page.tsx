import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { getSession, logout } from "@/lib";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const page = async () => {
  const session = await getSession();

  if (!session) {
    return redirect("/login");
  }

  console.log(session);

  return (
    <main className="">
      <div
        className="w-[450px] min-h-[250px] rounded-md bg-background border border-white border-opacity-[0.1] p-8
  space-y-8 flex flex-col items-center"
      >
        <h2 className="text-center text-lg font-semibold">Main Page</h2>
        <div className="flex flex-col space-y-4">
          <Avatar>
            <AvatarImage
              src={session.accountData.avatarfull}
              alt="steam-avatar"
            />
            <AvatarFallback>STEAM</AvatarFallback>
          </Avatar>
          <h2 className="font-medium">{session.accountData.personaname}</h2>
          <form
            action={async () => {
              "use server";
              await logout();
              redirect("/login");
            }}
          >
            <Button type="submit">Logout</Button>
          </form>
        </div>
        <div className="max-h-[300px] overflow-y-auto w-full space-y-4">
          {Object.entries(session.accountData).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label>{key}</label>
              <Input
                placeholder="Your name..."
                defaultValue={String(value)}
                disabled
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
