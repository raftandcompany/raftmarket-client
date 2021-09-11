import {format} from "date-fns";
import CardTypeRow from "../../../skeleton/component/card/CardTypeRow";
import React from "react";
import Category from "skeleton/component/card/Category";

export class ArtData{
    constructor() {
        this.title = "Art"
        this.subTitle = "An online community of makers, developers, and traders is pushing the art world into new territory."
        this.art = "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"
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

export default function ItemArt({data}){
    return (
        <Category
            type="art"
            bg={data.art}
            data={ data }
        />
    )
}