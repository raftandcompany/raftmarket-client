import React from "react";
import { TitleWrap }  from "style/titleWrap";
import { TitleLarge } from "style/textStyle";
import MoreButton from "skeleton/component/button/MoreButton"
import { SvgKing, SvgList, SvgOffer } from "asset/SvgImg";
import { color } from 'style/common/variable';

function ListTitle({ title, icon, more, type, action, name }) {
    return (
        <TitleWrap className={name? name : null}>
            <TitleLarge>
                {title}
                {
                    {
                        'King': <SvgKing />,
                        'Listing': <SvgList />,
                        'Offer': <SvgOffer />
                    }[icon]
                }
            </TitleLarge>
            <MoreButton type={type} icon={true} onClick={e => action()}>
                {more}
            </MoreButton>
        </TitleWrap>
    )
}

export default ListTitle;
