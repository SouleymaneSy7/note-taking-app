"use client";

import * as React from "react";
import { VisualyHiddenPropsType } from "@/types";

const VisualyHidden: React.FC<VisualyHiddenPropsType> = ({
  children,
  ...delegatedProps
}) => {
  const [forceShow, setForceShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <span className="visualy-hidden" {...delegatedProps}>
      {children}
    </span>
  );
};

export default VisualyHidden;
