"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldSeparator,
} from "@/components/ui/field";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Logo from "@/components/shared/logo";
import { PasswordInput } from "@/components/shared/password-input";
import { GithubIcon, GoogleIcon } from "@/components/icons/icons.component";
import { signupSchema } from "@/validators/auth.validators";
import { SignupInputValidatorsType } from "@/types";
import { toast } from "sonner";
import { signUpAction } from "@/app/actions/auth.actions";
import { Spinner } from "@/components/ui/spinner";
import { signIn } from "@/lib/auth-client";

export function SignupForm({
  className,
  ...delegatedProps
}: React.ComponentProps<"div">) {
  const [error, setError] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
  const [isGithubLoading, setIsGithubLoading] = React.useState(false);

  const id = React.useId();
  const fullNameId = `full-name-${id}`;
  const emailId = `email-${id}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputValidatorsType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupInputValidatorsType) => {
    try {
      setIsLoading(true);
      setError("");

      await signUpAction(data);
    } catch (err) {
      if (err instanceof Error && !err.message.includes("NEXT_REDIRECT")) {
        const errorMessage = err.message || "An error occurred";
        setError(errorMessage);
        toast.error(errorMessage);
      }

      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      setIsGithubLoading(true);
      setError("");

      await signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("GitHub sign in error:", err);

      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsGithubLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      setError("");

      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("Google sign in error:", err);

      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <React.Fragment>
      {error && toast.error(error)}

      <div className={cn("flex flex-col gap-6", className)} {...delegatedProps}>
        <Card>
          <CardHeader className="flex flex-col items-center gap-2 text-center">
            <Logo />

            <CardTitle className="text-foreground mt-4 text-base text-balance">
              Create your account
            </CardTitle>

            <CardDescription className="text-md">
              Fill in the form below to create your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                {/* Full Name */}
                <Field data-invalid={!!errors.name}>
                  <FieldLabel htmlFor={fullNameId} className="font-bold">
                    Full Name
                  </FieldLabel>

                  <Input
                    id={fullNameId}
                    type="text"
                    placeholder="John Doe"
                    required
                    disabled={isLoading}
                    {...register("name", { required: true })}
                    className={
                      errors.name
                        ? "border-destructive focus-visible:ring-destructive bg-destructive/15"
                        : ""
                    }
                  />

                  {errors.name && (
                    <FieldError className="font-regular text-xs">
                      {errors.name?.message}
                    </FieldError>
                  )}
                </Field>

                {/* Email */}
                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor={emailId} className="font-bold">
                    Email
                  </FieldLabel>

                  <Input
                    required
                    id={emailId}
                    type="email"
                    placeholder="johndoe@email.com"
                    disabled={isLoading}
                    {...register("email")}
                    className={
                      errors.email
                        ? "border-destructive focus-visible:ring-destructive bg-destructive/15"
                        : ""
                    }
                  />

                  {errors.email && (
                    <FieldError className="font-regular text-xs">
                      {errors.email?.message}
                    </FieldError>
                  )}
                </Field>

                {/* Password */}
                <PasswordInput
                  label="Password"
                  disabled={isLoading}
                  error={errors.password}
                  {...register("password")}
                  description="At least 8 characters with uppercase, lowercase, number, and special character."
                />

                {/* Confirm Password */}
                <PasswordInput
                  label="Confirm Password"
                  disabled={isLoading}
                  description="Please confirm your password."
                  error={errors.confirmPassword}
                  {...register("confirmPassword")}
                />

                <Field>
                  <Button type="submit" className="text-md font-bold">
                    Create Account
                  </Button>
                </Field>

                <FieldSeparator>Or continue with</FieldSeparator>
                <Field className="gap-6">
                  <div className="flex w-full items-center gap-5">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex flex-1 items-center"
                      onClick={handleGoogleSignIn}
                      disabled={isGoogleLoading}
                    >
                      {isGoogleLoading ? (
                        <Spinner />
                      ) : (
                        <React.Fragment>
                          <GoogleIcon />
                          Google
                        </React.Fragment>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="flex flex-1 items-center"
                      onClick={handleGitHubSignIn}
                      disabled={isGithubLoading}
                    >
                      {isGithubLoading ? (
                        <Spinner />
                      ) : (
                        <React.Fragment>
                          <GithubIcon />
                          GitHub
                        </React.Fragment>
                      )}
                    </Button>
                  </div>

                  <FieldDescription className="text-md text-center">
                    Already have an account?{" "}
                    <Link
                      href="login"
                      className="text-primary underline underline-offset-4"
                    >
                      Login
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}
