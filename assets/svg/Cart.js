import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Cart = (props) => {
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#858585"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 11V6.5a3.75 3.75 0 0 0-7.5 0V11m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.126 1.126 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 8h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 11a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </Svg>
)
}