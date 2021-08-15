import React from "react";
import { TitleWrap }  from "style/titleWrap";
import { TitleLarge } from "style/textStyle";
import MoreButton from "skeleton/component/button/MoreButton"
import { SvgKing, SvgArrowRight } from "asset/SvgImg";
import { color } from 'style/common/variable';

function ListTitle({ children, icon }) {
    return (
        <TitleWrap>
            <TitleLarge>
                {children}
                {
                    {
                        'King': <SvgKing />,
                    }[icon]
                }
            </TitleLarge>
            <MoreButton href="www.naver.com" color={color.white}>
            </MoreButton>
        </TitleWrap>
    )
}

export default ListTitle;
