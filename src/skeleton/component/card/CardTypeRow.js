import React from "react";
import Typography from "skeleton/component/text/Typography";
import { CardRow, CardAction, CardImage, CardContent }  from "style/cardStyle";
import { SvgPrice, SvgTime, SvgBasket, SvgStar, SvgStarFill }  from "asset/SvgImg";


function CardTypeRow({ size = 'full', data, ...props }) {
    return (
        <CardRow size={size}>
            <CardAction>
                <div className="image">
                    <CardImage src="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" alt="image" />
                </div>
                <i className="ico-favorite"><SvgStar /><SvgStarFill /></i>
                <CardContent>
                    <Typography variant="emphasis">
                        <SvgPrice />{data.price}
                    </Typography>
                    <Typography variant="body2">
                        {data.title}
                    </Typography>
                    <Typography variant="body1">
                        {data.subTitle}
                    </Typography>
                    <Typography variant="body1" name="basket">
                        <SvgBasket />{data.contractedInfo} 
                    </Typography>
                    <Typography variant="body1" name="time">
                        <SvgTime />{data.createdDate}
                    </Typography>
                </CardContent>
            </CardAction>
        </CardRow>

    )
}

export default CardTypeRow;
