import React from "react"
import { StyledLabel }  from "style/formStyle"

function InputLabel({ children, ...rest }) {
    return (
        <StyledLabel
            children={children}
            {...rest} />
    )
}

export default InputLabel;
