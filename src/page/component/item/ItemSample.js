import React from "react"
import {TextA, Title} from "../../../style/textStyle";
import {ItemBg} from "../../../style/listStyle";

const TAG = "ItemSample"
export default function ItemSample({pageObj}){
    return (
        <ItemBg color={pageObj.color}>
            <Title>{pageObj.title}</Title>
            <TextA>{pageObj.text}</TextA>
        </ItemBg>
    )
}