"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import Logo from "@/components/shared/logo";
import { GithubIcon, GoogleIcon } from "../../icons/icons.component";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { PasswordInput } from "@/components/shared/password-input";
import { LoginInputValidatorsType } from "@/types";
import { loginSchema } from "@/validators/auth.validators";
import { Spinner } from "@/components/ui/spinner";
import {
  signInAction,
  signInWithGithubAction,
  signInWithGoogleAction,
} from "@/app/actions/auth.actions";

export function LoginForm({
  className,
  ...delegatedProps
}: React.ComponentProps<"div">) {
  const [error, setError] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const id = React.useId();
  const emailId = `email-${id}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputValidatorsType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInputValidatorsType) => {
    try {
      setIsLoading(true);
      setError("");

      await signInAction(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const githubAuthSignIn = async () => {
    await signInWithGithubAction();
  };

  const googleAuthSignIn = async () => {
    await signInWithGoogleAction();
  };

  return (
    <React.Fragment>
      {error && toast.error(error)}

      <div className={cn("flex flex-col gap-6", className)} {...delegatedProps}>
        <Card>
          <CardHeader className="flex flex-col items-center gap-4 text-center">
            <Logo />

            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                {/* Email */}

                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor={emailId} className="font-bold">
                    Email
                  </FieldLabel>

                  <Input
                    required
                    id={emailId}
                    type="email"
                    placeholder="example@email.com"
                    disabled={isLoading}
                    {...register("email")}
                    className={
                      errors.email
                        ? "border-destructive focus-visible:ring-destructive bg-destructive/15"
                        : ""
                    }
                  />

                  {errors.email && (
                    <FieldError>{errors.email?.message}</FieldError>
                  )}
                </Field>

                {/* Password */}
                <PasswordInput
                  label="Password"
                  disabled={isLoading}
                  error={errors.password}
                  {...register("password")}
                />

                {/* Button */}
                <Field>
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className="text-md font-bold"
                  >
                    {isLoading && <Spinner />}
                    Login
                  </Button>
                </Field>

                {/* Separator */}
                <FieldSeparator>Or continue with</FieldSeparator>

                <Field className="gap-6">
                  <div className="flex w-full flex-wrap items-center gap-5">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex flex-1 items-center"
                      onClick={googleAuthSignIn}
                    >
                      <GoogleIcon />
                      Google
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="flex flex-1 items-center"
                      onClick={githubAuthSignIn}
                    >
                      <GithubIcon />
                      GitHub
                    </Button>
                  </div>

                  <FieldDescription className="text-md text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-primary font-bold underline underline-offset-4"
                    >
                      Sign up
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
