import * as React from "react";
import Link from "next/link";

import { getSessionAction, signOutAction } from "./actions/auth.actions";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getSessionAction();

  return (
    <React.Fragment>
      {session ? (
        <div className="h-screen">
          <div className="m-8 flex items-center justify-between">
            <Logo />

            <form action={signOutAction}>
              <Button type="submit" size={"lg"}>
                Logout
              </Button>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-6xl">User Name: {session.user.name}</h1>
          </div>
        </div>
      ) : (
        <div className="m-8 flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <Button variant={"link"}>
              <Link href={"/login"}>Login</Link>
            </Button>

            <Button variant={"link"}>
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
