import React from "react"
import { MoreButton }  from "style/textButton"
import * as All from "asset/SvgCategory"

function Button({ children, type, ...rest }) {
    return (
        <MoreButton type={type} {...rest}>
            See More
            <i></i>
        </MoreButton>
    )
}

export default Button;
