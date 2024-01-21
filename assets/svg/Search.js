import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Search = (props) => {
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#151515"
      d="M7.667 14.5C3.9 14.5.833 11.433.833 7.667.833 3.9 3.9.833 7.667.833 11.433.833 14.5 3.9 14.5 7.667c0 3.766-3.067 6.833-6.833 6.833Zm0-12.667a5.84 5.84 0 0 0-5.834 5.834A5.84 5.84 0 0 0 7.667 13.5 5.84 5.84 0 0 0 13.5 7.667a5.84 5.84 0 0 0-5.833-5.834ZM14.667 15.167a.495.495 0 0 1-.354-.147l-1.333-1.333a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l1.333 1.333a.503.503 0 0 1 0 .707c-.1.1-.227.147-.353.147Z"
    />
  </Svg>
)
    }