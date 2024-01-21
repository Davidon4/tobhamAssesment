import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Heart = (props) => {
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4A4A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.213}
      d="M18.999 5.25c0-2.485-2.1-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C9.284 1.876 7.622.75 5.686.75 3.099.75.999 2.765.999 5.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </Svg>
)
    }