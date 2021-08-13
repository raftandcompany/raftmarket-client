import React from "react"
import { EllipseButton }  from "style/roundButton"

function Button({ children, type, ...rest }) {
    return <EllipseButton type={type} {...rest}>{children}</EllipseButton>;
}

export default Button;
