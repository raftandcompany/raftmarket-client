import React from "react";
import { Button }  from "style/layoutStyle";
import { SvgHome, SvgBuy, SvgStore } from "asset/SvgImg";


export default function NaviButton({title, isSelectd, action}){
    return (
        <Button onClick={action} className={isSelectd? "active":null}>
            <span>
                {
                    {
                        'Home' : <SvgHome />,
                        'My Buys' : <SvgBuy />,
                        'My Store' : <SvgStore />,
                    }[title]
                }
                <span>{title}</span>
            </span>
        </Button>
    )
}
