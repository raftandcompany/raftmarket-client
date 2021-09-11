import React from "react";
import { format } from "date-fns"
import CardTypeRow from "../../../skeleton/component/card/CardTypeRow";

export class AssetData{
    constructor(data) {
        this.data = data
        this.date = new Date(data.created);

        this.title = data.collectionName == null ? "제목좀 넣어줘" : data.collectionName
        this.subTitle = (data.currency == null ? "코인명 넣어줘" : data.currency ) + " ( " + data.chain + ")"
        this.price = data.price
        this.contractedInfo = "마지막 거래정보좀 넣어줘";
        this.createdDate = format(this.date, "MMMM do, yyyy");

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
        <CardTypeRow size="medium" data={data}/>
    )
}