import React from "react"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import {Tab} from "style/layoutStyle"
import {Title} from "style/textStyle";
import {Button} from "style/buttonStyle";
import { SvgClose } from "asset/SvgImg";

const TAG = "PageTab"
export default function PageTab({pageObj}){
    return (
        <Tab>
            <Title>{pageObj.params.title}</Title>
            <Button
                className="close-button"
                visible = {pageObj.isPopup}
                onClick={()=>{
                    AppPagePresenter().closePopup(pageObj)}
                }
            ><SvgClose /></Button>
        </Tab>
    )
}


