import React from "react"
import {PageBg} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import {Title} from "../../../style/textStyle";

export default function PageIntro({pageObj}){
    return (
        <PageBg ani={fadeIn}>
            <Title>Welcome, <br />Raft Market</Title>

        </PageBg>
    )
}

