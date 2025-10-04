/** @format */

declare module "react-headroom" {
  import * as React from "react";

  interface HeadroomProps {
    children?: React.ReactNode;
    upTolerance?: number;
    downTolerance?: number;
    disableInlineStyles?: boolean;
    wrapperStyle?: React.CSSProperties;
    wrapperClassName?: string;
    style?: React.CSSProperties;
    className?: string;
    pinStart?: number;
  }

  const Headroom: React.ComponentType<HeadroomProps>;
  export default Headroom;
}
