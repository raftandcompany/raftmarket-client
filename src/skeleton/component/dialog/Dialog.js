import React from "react";

function Dialog({ isOpen, onClose, message }){
    return (
        isOpen && (
            <div onClick={onClose}>
                <div className="dialog">{message}</div>
            </div>
        )
    )
}
export default Dialog;