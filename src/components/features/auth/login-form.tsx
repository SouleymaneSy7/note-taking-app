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

export function LoginForm({
  className,
  ...delegatedProps
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...delegatedProps}>
      <Card>
        <CardHeader className="flex flex-col items-center gap-4 text-center">
          <Logo />

          <CardDescription className="text-md">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup>
              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-sm font-bold">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </Field>

              {/* Password */}
              <Field>
                <PasswordInput label={"Password"} />
              </Field>

              {/* Button */}
              <Field>
                <Button type="submit" className="text-md font-bold">
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
  );
}
