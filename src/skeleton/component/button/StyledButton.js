import React from "react"
import { StyledButton }  from "style/StyledButton"

function Button({ children, disabled, type }) {
  return <StyledButton disabled={disabled} type={type}>{children}</StyledButton>;
}

export default Button;
