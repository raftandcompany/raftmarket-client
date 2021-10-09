import React from "react";
import Button1 from "skeleton/component/button/EllipseButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import Button3 from "skeleton/component/button/RoundButton"
import ListTitle from "skeleton/component/title/ListTitle";
import InputText from "skeleton/component/input/InputText";
import InputLabel from "skeleton/component/input/InputLabel";
import MoreButton from "skeleton/component/button/MoreButton";
import SearchBox from "skeleton/component/search/SearchBox";
import CardTypeRow from "skeleton/component/card/CardTypeRow";
import CardTypeCol from "skeleton/component/card/CardTypeCol";
import CardUser from "skeleton/component/card/CardUser";
import CardImage from "skeleton/component/card/CardImage";
import Category from "skeleton/component/card/Category";
import Typography from "skeleton/component/text/Typography";

//import Share from "skeleton/component/unit/Share";
import Util from "skeleton/component/unit/Util";
import { Owner, Tab, Accordion } from "skeleton/component/unit/Unit";


import {Title} from "style/textStyle";
import {PageBg, StyledScrollWrap} from "style/layoutStyle";
import {StyledFullButtonWrap, StyledButtonWrap} from "style/roundButton";
import {StyledInputWrap} from "style/formStyle";
import { TitleWrap } from "style/titleWrap";

import {SvgArrowRight, SvgPrice, SvgArrowDown2} from "asset/SvgImg";
import Dialog from "skeleton/component/dialog/Dialog";
import { Favorite } from "skeleton/component/unit/Unit";
import SvgLoading from "asset/SvgLoading.svg";

import * as Images from "asset/temp/index";

const data1 = [
    {
        type: 'row',
        name: 'listing',
        items: [
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 0
            },
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 5
            }
        ]
    },
    {
        type: 'row',
        name: 'offers',
        items: [
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 0
            }
        ]
    }
]
const data2 = [
    {
        name: 'Properties',
        items: [
            {
                label: 'Body',
                item: 'Blue Cat Skin',
                rarity: 'Bad (100%)'
            },
            {
                label: 'Body',
                item: 'Blue Cat Skin',
                rarity: 'Bad (100%)'
            }
        ]
    },
    {
        name: 'details',
        items: [
            {
                label: 'Body',
                item: 'Blue Cat Skin',
                rarity: 'Bad (100%)'
            }
        ]
    }
]

export default function PageCollection({pageObj}){
    return (
        <PageBg>

<div className="collection">
                <Util result={true} favorite={true} share={true} more={false} link={true} />
                <div className="collection-box">
                    <div className="bg-gradiant purple"></div>
                    <div className="collection-thumb">
                        <img src={Images.Img6} alt="collection image" />
                    </div>
                    <Title>Cool Cats NFT</Title>
                    <Typography variant="body2" name="description">
                        An online community of makers, <br />
                        developers, and traders is pushing the art world <br />into new territory. <a href="">more</a>&gt;
                    </Typography>
                    <div className="collection-info">
                        <ul>
                            <li>
                                <Typography variant="emphasis" name="number">
                                    9.9K
                                </Typography>
                                <Typography variant="span" name="">
                                    Items
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="emphasis" name="number">
                                    9.9K
                                </Typography>
                                <Typography variant="span" name="">
                                    Owners
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="emphasis" name="number">
                                    <SvgPrice /> 9.9K
                                </Typography>
                                <Typography variant="span" name="">
                                    Avg. price
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    <div className="title-history">
                        <StyledFullButtonWrap>
                            <Button2 children={<span>View History <span className="text-sub">35 sec ago</span><SvgArrowRight /></span>} fullSize={true} />
                        </StyledFullButtonWrap>
                    </div>
                </div>

                <div className="collection-list">
                    <div className="">
                        <Button1 children="Sort by" height={38} fontSize={14} />

                    </div>
                    <ListTitle title={<span>Newly Minuted</span>} more="See All Rankings" type="white" />
                    <StyledScrollWrap>
                        <div className="list list-scroll">
                            <CardTypeRow size="medium" />
                            <CardTypeRow size="medium" />
                            <CardTypeRow size="medium" />
                            <CardTypeRow size="medium" />
                        </div>
                    </StyledScrollWrap>
                </div>
                
            </div>
        </PageBg>
    )
}
