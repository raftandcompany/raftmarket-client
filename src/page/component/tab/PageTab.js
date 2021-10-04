import React from "react"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import {Title} from "style/textStyle";
import {Button} from "style/buttonStyle";
import { SvgClose } from "asset/SvgImg";


const TAG = "PageTab"
export default function PageTab({pageObj}){
    return (
        <div className="popup-header">
            {/* <Util back={()=>{
                AppPagePresenter().closePopup(pageObj)}
            } result={true} favorite={false} share={false} more={false} link={false} /> */}
            <Button
                className="popup-close"
                visible = {pageObj.isPopup}
                onClick={()=>{
                    AppPagePresenter().closePopup(pageObj)}
                }
            ><SvgClose /></Button>
            <Title>{pageObj.params.title}</Title>
        </div>
    )
}


