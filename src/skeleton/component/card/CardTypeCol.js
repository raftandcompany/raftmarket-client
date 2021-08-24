import React from "react";
import Typography from "skeleton/component/text/Typography";
import { CardRow, CardAction, CardImage, CardContent }  from "style/cardStyle";
import { SvgPrice, SvgTime, SvgBasket }  from "asset/SvgImg";


function CardTypeCol({ size = 'full', ...props }) {
    return (
        <CardRow size={size}>
            <CardAction>
                <div className="image">
                    <CardImage src="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" alt="image" />
                </div>
                <CardContent>
                    <Typography variant="emphasis">
                        <SvgPrice />0.066
                    </Typography>
                    <Typography variant="body2">
                        Otter #93
                    </Typography>
                    <Typography variant="body1">
                        Otter #93
                    </Typography>
                    <Typography variant="body1" name="basket">
                        <SvgBasket />Last sold: 0.99 ETHETHETH ETHETH
                    </Typography>
                    <Typography variant="body1" name="time">
                        <SvgTime />2 days left
                    </Typography>
                </CardContent>
            </CardAction>
        </CardRow>

    )
}

export default CardTypeCol;
