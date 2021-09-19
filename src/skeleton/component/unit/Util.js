import React, {useState} from "react";
import { Favorite, Share, More, Link, Search } from "skeleton/component/unit/Unit";
import { SvgSearch, SvgBack } from "asset/SvgImg";
import { UtilBox, ShareBox, ShareBtn }  from "style/unitStyle";

function Util({ back, ...props }) {
    //const [searchKeyword, setSearchKeyword] = useState(keyword)
    return (
        <UtilBox className="utilbox">
            {props.result ? <button onClick={ e=> back() } className="btn-back"><SvgBack /></button> : null }
            <div className="rightbox">
                {props.favorite? <Favorite status={props.status} /> : null}
                {props.share? <Share /> : null}
                {props.more? <More /> : null}
                {props.link? <Link /> : null}
                {props.search? <button className="btn-link"><SvgSearch /></button> : null}
            </div>
        </UtilBox>
    )
}

export default Util;