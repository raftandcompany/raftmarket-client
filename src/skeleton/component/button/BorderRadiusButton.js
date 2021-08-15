import React from "react"
import { BorderRadiusButton }  from "style/roundButton"

function Button({ children, type, ...rest }) {
    return <BorderRadiusButton type={type} {...rest}>{children}</BorderRadiusButton>;
}

export default Button;
