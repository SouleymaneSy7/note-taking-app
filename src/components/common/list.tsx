import * as React from "react";
import { ListPropsType } from "@/types";

function List<Item, As extends React.ElementType>({
  as,
  items,
  renderItem,
  ...delegatedProps
}: ListPropsType<Item, As> &
  Omit<React.ComponentPropsWithoutRef<As>, keyof ListPropsType<Item, As>>) {
  const Component = as ?? "ul";

  return (
    <Component {...delegatedProps} role="list">
      {items.map(renderItem)}
    </Component>
  );
}

export default List;
