import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Basket = (props) => {
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4A4A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.74 8-.346 9m-4.788 0L6.26 8m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.166L15.16 18.673a2.25 2.25 0 0 1-2.244 2.077H5.084a2.25 2.25 0 0 1-2.244-2.077L1.772 4.79m14.456 0a48.108 48.108 0 0 0-3.478-.397M1.772 4.79a43.48 43.48 0 0 0-1.022.165m1.022-.165a48.111 48.111 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.967 51.967 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.668 48.668 0 0 0-7.5 0"
    />
  </Svg>
)
}
