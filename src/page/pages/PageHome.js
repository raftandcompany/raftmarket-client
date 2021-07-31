import React from "react";
import Test from "skeleton/component/test/Test"
import {PageBg} from "style/layoutStyle";
import {fadeIn, slideInUp} from "style/ani";
import PageTab from "page/component/tab/PageTab";


export default function PageHome({pageObj}){
    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <Test pageObj={pageObj}/>
        </PageBg>
    )
}