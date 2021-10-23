import React from "react";
import { Owner} from "skeleton/component/unit/Unit";
import { UserImage }  from "style/cardStyle";
import {SvgArrowRight2} from "../../../asset/SvgImg";

function CardUser({ size = 'full', data,  ...props }) {
    return (
        <div className="owner">
             <Owner 
                img={
                    data != null ? data.profileImg
                        : "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"}
                text={data != null ? data.title : "Artblockmaster"} />
            {
                data != null
                    ? data.isCurrent ? <div/> : <SvgArrowRight2/>
                    : <SvgArrowRight2 />
            }
        </div>
    )
}
export default CardUser;
