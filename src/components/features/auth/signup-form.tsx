import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
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

export function SignupForm({
  className,
  ...delegatedProps
}: React.ComponentProps<"div">) {
  return (
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
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name" className="font-bold">
                  Full Name
                </FieldLabel>
                <Input id="name" type="text" placeholder="John Doe" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="email" className="font-bold">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </Field>

              <Field>
                <PasswordInput label="Password" />
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>

              <Field>
                <PasswordInput label="Confirm Password" />
                <FieldDescription>
                  Please confirm your password.
                </FieldDescription>
              </Field>

              <Field>
                <Button type="submit" className="text-md font-bold">
                  Create Account
                </Button>
              </Field>

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
  );
}
