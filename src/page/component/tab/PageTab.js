import React from "react"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"

import {Title} from "style/textStyle";
import Util from "../../../skeleton/component/unit/Util";

const TAG = "PageTab"
export default function PageTab({pageObj}){
    return (
        <div>
            <Util back={()=>{
                AppPagePresenter().closePopup(pageObj)}
            } result={true} favorite={false} share={false} more={false} link={false} />
            <Title>{pageObj.params.title}</Title>
        </div>
    )
}


