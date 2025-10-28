import * as React from "react";

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
