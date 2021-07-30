import React from "react";

export default function RectButton({title, action}){
    return (
        <div>
            <button onClick={action}>{title}</button>
        </div>
    )
}