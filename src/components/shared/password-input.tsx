"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInputPropsType } from "@/types";
import { FieldLabel } from "../ui/field";
// import VisualyHidden from "../common/visualy-hidden";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputPropsType
>(({ className, label, id, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputId = id || "password";

  return (
    <div className="flex w-full flex-col gap-3">
      {label && (
        <FieldLabel htmlFor={inputId} className="font-bold">
          {label}
        </FieldLabel>
      )}

      <div className="relative">
        <Input
          id={inputId}
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          placeholder={showPassword ? "" : "••••••••"}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide the password" : "Show the password"}
        >
          {showPassword ? (
            <EyeOffIcon className="text-muted-foreground h-4 w-4" />
          ) : (
            <EyeIcon className="text-muted-foreground h-4 w-4" />
          )}

          {/* <VisualyHidden> */}
          {/*   {showPassword ? "Hide the password" : "Show the password"} */}
          {/* </VisualyHidden> */}
        </Button>
      </div>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
