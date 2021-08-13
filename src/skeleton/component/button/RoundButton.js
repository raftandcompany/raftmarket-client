import React from "react"
import { RoundEdgeButton }  from "style/RoundEdgeButton"

function Button({ children, disabled, type }) {
  return <RoundEdgeButton disabled={disabled} type={type}>{children}</RoundEdgeButton>;
}

export default Button;
