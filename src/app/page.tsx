import Link from "next/link";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

import Logo from "@/components/shared/logo";
import { signOutAction } from "./actions/auth.actions";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
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
    );
  }

  return (
    <div className="m-8 flex items-center justify-between">
      <Logo />

      <div className="flex flex-col gap-4">
        <p>User Name: {session.user.name}</p>

        <form action={signOutAction}>
          <Button type="submit" size={"lg"}>
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
