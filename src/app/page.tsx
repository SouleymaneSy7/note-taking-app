import * as React from "react";
import Link from "next/link";

import { getSessionAction, signOutAction } from "./actions/auth.actions";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layouts/main-layout";

export default async function Home() {
  const session = await getSessionAction();

  return (
    <React.Fragment>
      {session ? (
        <MainLayout>Note Here</MainLayout>
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
