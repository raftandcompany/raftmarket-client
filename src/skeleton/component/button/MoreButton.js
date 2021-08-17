import React from "react"
import { MoreButton }  from "style/textButton"
import { SvgArrowRight } from "asset/SvgImg";

function Button({ children, icon, type, ...rest }) {
    return (
        <MoreButton type={type} {...rest}>
            <span>{children}</span>
            {
                icon ? <SvgArrowRight type={type} /> : null
            }
        </MoreButton>
    )
}

export default Button;
