import * as React from "react";
import { TitleProps } from "@/types";

const Title: React.FC<TitleProps> = ({
  level,
  children,
  ...delegatedProps
}) => {
  const Heading: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    ...props
  }) => {
    return React.createElement(level, props, children);
  };

  return (
    <Heading {...delegatedProps} role="heading">
      {children}
    </Heading>
  );
};

export default Title;
