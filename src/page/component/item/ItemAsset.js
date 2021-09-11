import React from "react";
import { format } from "date-fns"
import CardTypeRow from "skeleton/component/card/CardTypeRow";
import CardTypeCol from "skeleton/component/card/CardTypeCol";

export class AssetData{
    constructor(data) {
        this.data = null
        this.art = ""
        this.date = null;
        this.title = ""
        this.subTitle = ""
        this.price = ""
        this.currency = ""
        this.chain = ""
        this.contractedInfo = ""
        this.createdDate = ""
        this.owners = Array()
        this.displayName = ""
        this.description = ""
        this.displayArt = ""
        this.externalLink = null
        this.properties = []
        if (data != null) {
            this.setData(data)
        }

    }
    setData(data){
        this.data = data
        this.art = "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"
        this.date = new Date(data.created);
        this.title = data.collectionName == null ? "제목좀 넣어줘" : data.collectionName
        this.subTitle = (data.currency == null ? "코인명 넣어줘" : data.currency ) + " ( " + data.chain + ")"
        this.price = data.price
        this.currency = data.currency
        this.chain = data.chain
        this.contractedInfo = "마지막 거래정보좀 넣어줘";
        this.createdDate = format(this.date, "MMMM do, yyyy");
        if (data.owners!= null) {
            let count = data.owners.length
            this.owners = data.owners.map((owner, index) => {
                return new OwnerData(owner, index === (count-1))
            })
        }

        if (data.meta!= null) {
            this.displayName = data.meta.name
            this.description = data.meta.description
            this.externalLink = data.meta.externalLink
            this.properties = data.properties
        }
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

    /*
    "meta": {
        "id": 1,
        "name": "metaName",
        "description": "metaDesc",
        "externalLink": "metaExtern",
        "properties": [
            {
                "type": "type1",
                "name": "name1"
            }
        ]
    }
    */
}

export class OwnerData{
    constructor(data, isCurrent) {
        this.data = data
        this.profileImg = "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"
        this.date = new Date(data.created);
        this.title = data.address
        this.isCurrent = isCurrent
    }
    /*
      "address": "address1",
      "quantity": 1,
      "created": "2016-10-27T17:13:40",
      "lastModified": "2016-10-27T17:13:40"
    */
}

export default function ItemAsset({data, action}){
    return (
        <CardTypeRow size = "medium"
                     data = {data}
                     action = {action}
                     />
    )
}

export function ItemAssetArt({data}){
    return (
        <CardTypeCol data = {data}/>
    )
}