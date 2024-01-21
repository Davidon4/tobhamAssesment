import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Home = (props) => {
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#858585"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.25 10.5 8.954-8.955a1.126 1.126 0 0 1 1.591 0L20.75 10.5M3.5 8.25v10.125c0 .621.504 1.125 1.125 1.125H8.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V19.5h4.125c.621 0 1.125-.504 1.125-1.125V8.25M7.25 19.5h8.25"
    />
  </Svg>
)
  }