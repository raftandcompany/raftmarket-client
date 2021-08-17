import React from "react";
import {StyledDialog} from "style/formStyle";

function Dialog({ isOpen, onClose, message }){
    return (
        isOpen && (
            <StyledDialog onClick={onClose}>
                <p>{message}</p>
            </StyledDialog>
        )
    )
}
export default Dialog;
