"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { PasswordInputPropsType } from "@/types";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputPropsType
>(({ className, error, label, description, ...delegatedProps }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const id = React.useId();
  const passwordId = `password-${id}`;

  return (
    <Field data-invalid={error ? true : undefined}>
      {label && (
        <FieldLabel htmlFor={passwordId} className="font-bold">
          {label}
        </FieldLabel>
      )}

      <div className="relative">
        <Input
          ref={ref}
          id={passwordId}
          {...delegatedProps}
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          placeholder={showPassword ? "" : "••••••••"}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? passwordId : undefined}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOffIcon className="text-muted-foreground h-4 w-4" />
          ) : (
            <EyeIcon className="text-muted-foreground h-4 w-4" />
          )}

          {/* <VisualyHidden> */}
          {/*   {showPassword ? "Show the password" : "Hide the password"} */}
          {/* </VisualyHidden> */}
        </Button>
      </div>

      {description && <FieldDescription>{description}</FieldDescription>}

      {error && <FieldError>{error.message}</FieldError>}
    </Field>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
