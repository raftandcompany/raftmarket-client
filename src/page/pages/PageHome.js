import React from "react";
import Test from "skeleton/component/test/Test"
import {Title} from "style/TextStyle";
import {PageBg} from "style/LayoutStyle";


export default function PageHome({pageObj}){
    return (
        <PageBg>
            <Title>{pageObj.params.title}</Title>
            <Test pageObj={pageObj}/>
        </PageBg>
    )
}