import React from "react";
import { TitleWrap }  from "style/titleWrap";
import { TitleLarge } from "style/textStyle";
import MoreButton from "skeleton/component/button/MoreButton"
import { SvgKing } from "asset/SvgImg";
import { color } from 'style/common/variable';

function ListTitle({ children1, icon, children2, type }) {
    return (
        <TitleWrap>
            <TitleLarge>
                {children1}
                {
                    {
                        'King': <SvgKing />,
                    }[icon]
                }
            </TitleLarge>
            <MoreButton href="www.naver.com" type={type} icon={true}>
                {children2}
            </MoreButton>
        </TitleWrap>
    )
}

export default ListTitle;
