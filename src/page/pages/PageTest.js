import React from "react";
import Test from "skeleton/component/test/Test"
import {PageBg} from "style/layoutStyle";
import {slideInUp, fadeIn} from "style/ani";
import PageTab from "../component/tab/PageTab";

export default function PageTest({pageObj}){
    return (
        <PageBg color="black"
                isPopup={pageObj.isPopup}
                ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <Test pageObj={pageObj}/>
        </PageBg>
    )
}