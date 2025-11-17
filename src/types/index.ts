import * as React from "react";

import { z } from "zod";
import { FieldError } from "react-hook-form";

import { loginSchema, signupSchema } from "@/validators/auth.validators";
import { LucideIcon } from "lucide-react";

export type ContainerTypes<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export type ListPropsType<Item, As extends React.ElementType> = {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  as?: As;
};

export type VisualyHiddenPropsType = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"span">;

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export type IconPropsType = {
  fill?: string;
} & React.ComponentPropsWithoutRef<"svg">;

export interface PasswordInputPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  description?: string;
}

export type LoginInputValidatorsType = z.infer<typeof loginSchema>;
export type SignupInputValidatorsType = z.infer<typeof signupSchema>;

export type SidebarNavUserPropsType = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
};

export type SidebarNavTagsPropsType = {
  tagTitle: string;
  tagsContent: {
    id: string;
    title: string;
    icon?: LucideIcon;
  }[];
};

export type SidebarNavMainPropsType = {
  items: {
    id: string;
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive: boolean;
  }[];
};
