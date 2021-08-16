import React from "react"
import { MoreButton }  from "style/textButton"
import { SvgArrowRight } from "asset/SvgImg";

function Button({ children, type, ...rest }) {
    return (
        <MoreButton type={type} {...rest}>
            <span>{children}</span>
            <SvgArrowRight type={type} />
        </MoreButton>
    )
}

export default Button;
