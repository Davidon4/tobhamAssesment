import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ShoppingBag = (props) => {
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.857 9.884v-4.5a3.75 3.75 0 0 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.12 1.243h-15.5a1.124 1.124 0 0 1-1.12-1.243l1.265-12A1.125 1.125 0 0 1 3.62 6.884h12.974c.576 0 1.059.435 1.119 1.007ZM6.732 9.884a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </Svg>
)
}