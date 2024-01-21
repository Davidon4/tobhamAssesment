import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Menu = (props) => {
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#858585"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 3.5A2.25 2.25 0 0 1 3 1.25h2.25A2.25 2.25 0 0 1 7.5 3.5v2.25A2.25 2.25 0 0 1 5.25 8H3A2.25 2.25 0 0 1 .75 5.75V3.5Zm0 9.75A2.25 2.25 0 0 1 3 11h2.25a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25H3A2.25 2.25 0 0 1 .75 15.5v-2.25ZM10.5 3.5a2.25 2.25 0 0 1 2.25-2.25H15a2.25 2.25 0 0 1 2.25 2.25v2.25A2.25 2.25 0 0 1 15 8h-2.25a2.25 2.25 0 0 1-2.25-2.25V3.5Zm0 9.75A2.25 2.25 0 0 1 12.75 11H15a2.25 2.25 0 0 1 2.25 2.25v2.25A2.25 2.25 0 0 1 15 17.75h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"
    />
  </Svg>
)
  }