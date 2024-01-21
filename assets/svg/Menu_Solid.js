import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const MenuSolid = (props) => {
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#DB3C25"
      fillRule="evenodd"
      d="M0 3.5a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3.5Zm9.75 0a3 3 0 0 1 3-3H15a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V3.5ZM0 13.25a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H15a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
      clipRule="evenodd"
    />
  </Svg>
)
}
