import React from "react"
import { RoundButton }  from "style/RoundButton"

function Button({ children, disabled, type }) {
  return <RoundButton disabled={disabled} type={type}>{children}</RoundButton>;
}

export default Button;
