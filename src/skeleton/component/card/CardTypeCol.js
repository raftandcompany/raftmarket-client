import React from "react";
import Typography from "skeleton/component/text/Typography";
import { CardCol, CardAction, CardImage, CardContent, UserImage }  from "style/cardStyle";
import { SvgPrice, SvgTime, SvgBasket, SvgCart, SvgArrowRight2, SvgList, SvgOffer, SvgTransfer }  from "asset/SvgImg";
import CardUser from "skeleton/component/card/CardUser";
import {v4 as uuidv4} from "uuid";

function CardTypeCol({ size = 'full', data,  ...props }) {
    const OwnerList = ({ owners }) =>
        <div className="owner">
            { owners.map( owner => <CardUser key={uuidv4().toString()} data = {owner}/> ) }
        </div>

    const OwnerListSample = () =>
        <div className="owner">
            <Typography variant="span">
                <UserImage src="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" alt="image"/>Artblockmaster
            </Typography>
            <SvgArrowRight2 />
            <Typography variant="span">
                <UserImage src="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" />daniel70
            </Typography>
        </div>

    return (
        <CardCol size={size}>
            <CardAction>
                <Typography variant="body1" name="pre">
                    32 seconds ago
                </Typography>
                <div className="image">
                    <CardImage src={data != null
                        ? data.art
                        : "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" } alt="image" />
                </div>
                <CardContent>
                    <Typography variant="body2" name="status cart">
                        <span><SvgCart /></span>Sale
                    </Typography>
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span>List
                    </Typography>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span>Offer
                    </Typography>
                    <Typography variant="body2" name="status transfer">
                        <span><SvgTransfer /></span>{data != null ? data.contractedInfo : "Transfer"}
                    </Typography>
                    <Typography variant="body1">
                        AlgoRhythms #701
                    </Typography>
                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0"}
                        <Typography variant="span" name="bar"></Typography>
                        <Typography variant="span">
                            {data != null ? data.currency : "Et"}
                        </Typography>
                        <Typography variant="span" name="unit">
                            {data != null ? data.chain : "Qt"}
                        </Typography>
                    </Typography>
                </CardContent>
                {
                    data != null
                        ? <OwnerList owners={data.owners}/>
                        : <OwnerListSample/>
                }

            </CardAction>
        </CardCol>
    )



}


export default CardTypeCol;
