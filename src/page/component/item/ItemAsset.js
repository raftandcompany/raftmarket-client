import {ItemBg} from "../../../style/listStyle";
import {TextA, Title} from "../../../style/textStyle";
import React from "react";

export class AssetData{
    constructor(data) {
        this.title = data.collectionName
        this.subTitle = data.currency + " ( " + data.chain + ")"
        this.collectionAddress = data.collectionAddress
        this.assetId = data.assetId
        this.price = data.price
        this.date = data.created
        this.color = "purple"
    }
    /*
    "chain": "RINKEBY",
    "collectionAddress": "0x000ce7170b9eef0c5f0eff241ba62f34c9294e8a",
    "assetId": "asset1",
    "totalQuantity": 1,
    "createTxId": "1",
    "created": "2021-07-19T05:45:23",
    "currency": "ETHER",
    "price": 1,
    "collectionName": "https://gutterrats.s3.us-east-2.amazonaws.com/j/1",
    "owners": []
    */
}

export default function ItemAsset({data}){
    return (
        <ItemBg color={data.color}>
            <Title>{data.title}</Title>
            <TextA>{data.subTitle}</TextA>
            <TextA>{data.price}</TextA>
            <TextA>{data.date}</TextA>
        </ItemBg>
    )
}