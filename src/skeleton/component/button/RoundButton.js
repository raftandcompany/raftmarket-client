import React from "react"
import { RoundButton }  from "style/roundButton"

function Button({ children, type, ...rest }) {
    return <RoundButton type={type} {...rest}>{children}</RoundButton>;
}

export default Button;
