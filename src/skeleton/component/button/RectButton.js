import React from "react";
import { Button }  from "style/buttonStyle"
import { v4 as uuidv4 } from 'uuid';
export default function RectButton({title, action, visible}){
    return (
        <Button onClick={action} visible={visible} >{title}</Button>
    )
}