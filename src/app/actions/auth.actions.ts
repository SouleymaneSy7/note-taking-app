"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { LoginInputValidatorsType, SignupInputValidatorsType } from "@/types";

export const signUpAction = async (formData: SignupInputValidatorsType) => {
  const name = formData.name;
  const email = formData.email;
  const password = formData.password;

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  redirect("/");
};

export const signInAction = async (formData: LoginInputValidatorsType) => {
  const email = formData.email;
  const password = formData.password;

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  redirect("/");
};

export const signOutAction = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/login");
};

export async function getSessionAction() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export const signInWithGoogleAction = async () => {
  await auth.api.signInSocial({
    body: {
      provider: "google",
    },
  });
};

export const signInWithGithubAction = async () => {
  await auth.api.signInSocial({
    body: {
      provider: "github",
    },
  });
};
