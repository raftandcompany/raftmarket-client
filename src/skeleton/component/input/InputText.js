import React from "react"
import { StyledInput }  from "style/formStyle"

function InputText({ placeHolder, type, ...rest }) {
    return (
        <StyledInput
            placeHolder={placeHolder}
            type={type}
            {...rest} />
    )
}

export default InputText;
