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
    watch,
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

      const promise = new Promise((resolve) =>
        setTimeout(() => resolve(console.log("Login formData :", data)), 10000),
      );

      return promise;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(watch("email"));
  console.log(watch("password"));

  return (
    <React.Fragment>
      {error && toast.error(error)}

      <div className={cn("flex flex-col gap-6", className)} {...delegatedProps}>
        <Card className="p-8">
          <CardHeader className="flex flex-col items-center gap-4 text-center">
            <Logo />

            <CardDescription className="text-md">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                {/* Email */}

                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor={emailId} className="text-sm font-bold">
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
                  <div className="flex w-full items-center gap-5">
                    <Button variant="outline" type="button" className="flex-1">
                      <GoogleIcon />
                      Google
                    </Button>

                    <Button variant="outline" type="button" className="flex-1">
                      <GithubIcon />
                      GitHub
                    </Button>
                  </div>

                  <FieldDescription className="text-md text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-primary underline underline-offset-4"
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
