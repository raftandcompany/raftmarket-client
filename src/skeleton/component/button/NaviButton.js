import React from "react"
import logo from "asset/logo.svg"
import { Button }  from "style/buttonStyle"
import { Icon }  from "style/iconStyle"
import { TextA, TextB }  from "style/textStyle"

export default function NaviButton({title, isSelectd, action}){

    return (
        <Button onClick={action}>
            <span>
                <Icon src={ logo }></Icon>
                {
                  isSelectd
                      ? <TextA>{title + "Me"}</TextA>
                      : <TextB>{title}</TextB>
                }
            </span>
        </Button>

    )
}