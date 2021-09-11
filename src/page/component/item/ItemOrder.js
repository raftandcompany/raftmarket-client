import React from "react";
import { format } from "date-fns"
import OrderButton from "skeleton/component/button/BorderRadiusButton";

export class OrderData{
    constructor(data) {
        this.data = data
        this.date = new Date(data.created);
        this.orderType = data.orderType
        this.title = data.orderType + " " + data.currency + " ( " +  data.basePrice + " )"
        this.subTitle = data.currency + " " + data.status
        this.price = data.basePrice
        this.createdDate = format(this.date, "MMMM do, yyyy");
    }
    /*
      "id": 1,
      "chain": "RINKEBY",
      "collectionAddress": "collectionAddress1",
      "assetId": "assetId1",
      "orderType": "LISTINGS",
      "status": "OPENED",
      "exchange": "exchange1",
      "maker": "address1",
      "makerRelayerFee": 0,
      "takerRelayerFee": 0,
      "feeRecipient": "feeRecipient1",
      "callData": "callData1",
      "basePrice": 1,
      "listingTime": 1111111,
      "expirationTime": 2222222,
      "salt": "salt1",
      "signature": "signature1",
      "created": "2016-09-27T17:13:40",
      "currency": "RINKEBY_ETHER"
    */
}

export function ItemListing({data, action}){
    return (
        <OrderButton children={data.title}
                     type="purple"
                     unactive={true}
                     fullSize={true} />
    )
}

export function ItemOffer({data, action}){
    return (
        <OrderButton children={data.title}
                     type= "blue"
                     unactive={true}
                     fullSize={true} />
    )
}