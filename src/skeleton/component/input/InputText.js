import React from "react"
import { StyledInput }  from "style/formStyle"

function InputText({ placeHolder, type,children, ...rest }) {

    return (
        <StyledInput
            placeHolder={placeHolder}
            type={type}
            {...rest} >{children}</StyledInput>
    )
}

export default InputText;
