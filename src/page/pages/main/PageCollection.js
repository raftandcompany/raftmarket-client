import React, {useState, useEffect} from "react";
import Button1 from "skeleton/component/button/EllipseButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import Button3 from "skeleton/component/button/RoundButton"
import ListTitle from "skeleton/component/title/ListTitle";
import InputText from "skeleton/component/input/InputText";
import InputLabel from "skeleton/component/input/InputLabel";
import MoreButton from "skeleton/component/button/MoreButton";
import SearchBox from "skeleton/component/search/SearchBox";
import CardTypeRow from "skeleton/component/card/CardTypeRow";
import CardSample from "skeleton/component/card/CardSample";
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

import {SvgArrowRight, SvgPrice, SvgArrowDown2, SvgFilter} from "asset/SvgImg";
import Dialog from "skeleton/component/dialog/Dialog";
//import { Filter } from "skeleton/component/unit/Unit";
import SvgLoading from "asset/SvgLoading.svg";

import * as Images from "asset/temp/index";
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"



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
const sampleData = {id: 'ddccab35-553d-4cf3-8a14-3054e6a56764', pageId: 1001, params: {}, isPopup: true}

export default function PageCollection({pageObj}){
    const [modalVisible, setModalVisible] = useState(false);
    let visible = 'none';

    function openLayer(e) {
        // e.preventDefault();
        setModalVisible(true);
        
    }
    function closeLayer(e) {
        e.preventDefault();
        setModalVisible(false);
        
    }
    useEffect(() => {
        if (modalVisible) {
            document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        }
        
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText = `position: ""; top: "";`
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    if (modalVisible) visible = 'block';
    else visible = 'none'; 

    return (
        <PageBg>

            <div className="collection">
                <Util result={false} favorite={true} share={true} more={false} link={true} />
                <div className="collection-box">
                    <div className="bg-gradiant purple"></div>
                    <div className="collection-thumb">
                        <img src={Images.Img6} alt="collection image" />
                    </div>
                    <Title>Cool Cats NFT</Title>
                    <Typography variant="body2" name="description">
                        An online community of makers, <br />
                        developers, and traders is pushing the art world <br />into new territory. <a href="#">more</a>&gt;
                    </Typography>
                    <div className="infobox collection-info">
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
                
                <div className="collection-items" id="collectionList">
                    <div className="sort">
                        <Button1 children={<span>Sort by <SvgArrowDown2 /></span>} height={38} fontSize={14} className="btn-sort" />
                        <Button1 children={<span><SvgFilter />Filter <span >0</span></span>} height={38} fontSize={14} className="btn-filter" />
                    </div>
                    
                    <ListTitle title={<span>Newly Minuted</span>} more="See All Rankings" type="white" />
                    <div className="list list-collection">
                        <div className="sc-fFSPTT iQmpbw card-row"><a className="sc-iemWCZ bhFgxG" onClick={e => openLayer(e)}><div className="card-image"><img src={Images.Img2} alt="image" /></div><div className="sc-dIvrsQ jPPVFO"><strong className="typo-emphasis"><svg width="0.5rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.66683V3.78016C0 4.1335 0.14 4.4735 0.393333 4.72683L2.66667 7.00016L0.386667 9.28016C0.14 9.5335 0 9.8735 0 10.2268V12.3335C0 13.0668 0.6 13.6668 1.33333 13.6668H6.66667C7.4 13.6668 8 13.0668 8 12.3335V10.2268C8 9.8735 7.86 9.5335 7.61333 9.28683L5.33333 7.00016L7.60667 4.7335C7.86 4.48016 8 4.14016 8 3.78683V1.66683C8 0.933496 7.4 0.333496 6.66667 0.333496H1.33333C0.6 0.333496 0 0.933496 0 1.66683Z" fill="#fff"></path></svg>0</strong><p className="typo-body2">고양이7</p><p className="typo-body1">고양이7 입니다</p><p className="typo-body1 basket"><svg width="0.875rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8333 4.24989H10.0391L7.48409 0.423223C7.37325 0.259889 7.18658 0.178223 6.99992 0.178223C6.81325 0.178223 6.62659 0.259889 6.51575 0.429056L3.96075 4.24989H1.16659C0.845752 4.24989 0.583252 4.51239 0.583252 4.83322C0.583252 4.88572 0.589085 4.93822 0.606585 4.99072L2.08825 10.3982C2.22242 10.8882 2.67159 11.2499 3.20825 11.2499H10.7916C11.3283 11.2499 11.7774 10.8882 11.9174 10.3982L13.3991 4.99072L13.4166 4.83322C13.4166 4.51239 13.1541 4.24989 12.8333 4.24989ZM6.99992 1.79989L8.63325 4.24989H5.36658L6.99992 1.79989ZM10.7916 10.0832L3.21409 10.0891L1.93075 5.41655H12.0749L10.7916 10.0832ZM6.99992 6.58322C6.35825 6.58322 5.83325 7.10822 5.83325 7.74989C5.83325 8.39155 6.35825 8.91655 6.99992 8.91655C7.64158 8.91655 8.16658 8.39155 8.16658 7.74989C8.16658 7.10822 7.64158 6.58322 6.99992 6.58322Z" fill="#FC9144"></path></svg>No information</p><p className="typo-body1 time"><svg width="0.75rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8334 2.3248L9.15008 0.0498047L8.39175 0.924805L11.0751 3.1998L11.8334 2.3248ZM3.60841 0.983138L2.85008 0.108138L0.166748 2.3248L0.925081 3.1998L3.60841 0.983138ZM6.29175 3.66647H5.41675V7.16647L8.15842 8.85814L8.62508 8.15814L6.29175 6.75814V3.66647ZM6.00008 1.33314C3.08342 1.33314 0.750081 3.66647 0.750081 6.58314C0.750081 9.4998 3.08342 11.8331 6.00008 11.8331C8.91675 11.8331 11.2501 9.4998 11.2501 6.58314C11.2501 3.66647 8.91675 1.33314 6.00008 1.33314ZM6.00008 10.6665C3.72508 10.6665 1.91675 8.85814 1.91675 6.58314C1.91675 4.30814 3.72508 2.4998 6.00008 2.4998C8.27508 2.4998 10.0834 4.30814 10.0834 6.58314C10.0834 8.85814 8.27508 10.6665 6.00008 10.6665Z" fill="#EF5DA8"></path></svg>September 15th, 2021</p></div></a><button className="btn-favorite"><svg width="1.375rem" height="1.375rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M19.925 6.54667L14.2783 6.05667L12.0733 0.865C11.6766 -0.08 10.3233 -0.08 9.92663 0.865L7.72163 6.06833L2.08663 6.54667C1.05996 6.62833 0.639963 7.91167 1.42163 8.58833L5.7033 12.2983L4.41996 17.805C4.18663 18.8083 5.27163 19.6017 6.1583 19.065L11 16.1483L15.8416 19.0767C16.7283 19.6133 17.8133 18.82 17.58 17.8167L16.2966 12.2983L20.5783 8.58833C21.36 7.91167 20.9516 6.62833 19.925 6.54667ZM11 13.9667L6.6133 16.615L7.77996 11.6217L3.90663 8.26167L9.01663 7.81833L11 3.11667L12.995 7.83L18.105 8.27333L14.2316 11.6333L15.3983 16.6267L11 13.9667Z" fill="white"></path></g><defs><filter id="filter0_d" x="0.0168457" y="0.15625" width="21.9697" height="21.0934" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></button></div>
                        <div className="sc-fFSPTT iQmpbw card-row"><a className="sc-iemWCZ bhFgxG" onClick={e => openLayer(e)}><div className="card-image"><img src={Images.Img3} alt="image" /></div><div className="sc-dIvrsQ jPPVFO"><strong className="typo-emphasis"><svg width="0.5rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.66683V3.78016C0 4.1335 0.14 4.4735 0.393333 4.72683L2.66667 7.00016L0.386667 9.28016C0.14 9.5335 0 9.8735 0 10.2268V12.3335C0 13.0668 0.6 13.6668 1.33333 13.6668H6.66667C7.4 13.6668 8 13.0668 8 12.3335V10.2268C8 9.8735 7.86 9.5335 7.61333 9.28683L5.33333 7.00016L7.60667 4.7335C7.86 4.48016 8 4.14016 8 3.78683V1.66683C8 0.933496 7.4 0.333496 6.66667 0.333496H1.33333C0.6 0.333496 0 0.933496 0 1.66683Z" fill="#fff"></path></svg>0</strong><p className="typo-body2">고양이7</p><p className="typo-body1">고양이7 입니다</p><p className="typo-body1 basket"><svg width="0.875rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8333 4.24989H10.0391L7.48409 0.423223C7.37325 0.259889 7.18658 0.178223 6.99992 0.178223C6.81325 0.178223 6.62659 0.259889 6.51575 0.429056L3.96075 4.24989H1.16659C0.845752 4.24989 0.583252 4.51239 0.583252 4.83322C0.583252 4.88572 0.589085 4.93822 0.606585 4.99072L2.08825 10.3982C2.22242 10.8882 2.67159 11.2499 3.20825 11.2499H10.7916C11.3283 11.2499 11.7774 10.8882 11.9174 10.3982L13.3991 4.99072L13.4166 4.83322C13.4166 4.51239 13.1541 4.24989 12.8333 4.24989ZM6.99992 1.79989L8.63325 4.24989H5.36658L6.99992 1.79989ZM10.7916 10.0832L3.21409 10.0891L1.93075 5.41655H12.0749L10.7916 10.0832ZM6.99992 6.58322C6.35825 6.58322 5.83325 7.10822 5.83325 7.74989C5.83325 8.39155 6.35825 8.91655 6.99992 8.91655C7.64158 8.91655 8.16658 8.39155 8.16658 7.74989C8.16658 7.10822 7.64158 6.58322 6.99992 6.58322Z" fill="#FC9144"></path></svg>No information</p><p className="typo-body1 time"><svg width="0.75rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8334 2.3248L9.15008 0.0498047L8.39175 0.924805L11.0751 3.1998L11.8334 2.3248ZM3.60841 0.983138L2.85008 0.108138L0.166748 2.3248L0.925081 3.1998L3.60841 0.983138ZM6.29175 3.66647H5.41675V7.16647L8.15842 8.85814L8.62508 8.15814L6.29175 6.75814V3.66647ZM6.00008 1.33314C3.08342 1.33314 0.750081 3.66647 0.750081 6.58314C0.750081 9.4998 3.08342 11.8331 6.00008 11.8331C8.91675 11.8331 11.2501 9.4998 11.2501 6.58314C11.2501 3.66647 8.91675 1.33314 6.00008 1.33314ZM6.00008 10.6665C3.72508 10.6665 1.91675 8.85814 1.91675 6.58314C1.91675 4.30814 3.72508 2.4998 6.00008 2.4998C8.27508 2.4998 10.0834 4.30814 10.0834 6.58314C10.0834 8.85814 8.27508 10.6665 6.00008 10.6665Z" fill="#EF5DA8"></path></svg>September 15th, 2021</p></div></a><button className="btn-favorite"><svg width="1.375rem" height="1.375rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M19.925 6.54667L14.2783 6.05667L12.0733 0.865C11.6766 -0.08 10.3233 -0.08 9.92663 0.865L7.72163 6.06833L2.08663 6.54667C1.05996 6.62833 0.639963 7.91167 1.42163 8.58833L5.7033 12.2983L4.41996 17.805C4.18663 18.8083 5.27163 19.6017 6.1583 19.065L11 16.1483L15.8416 19.0767C16.7283 19.6133 17.8133 18.82 17.58 17.8167L16.2966 12.2983L20.5783 8.58833C21.36 7.91167 20.9516 6.62833 19.925 6.54667ZM11 13.9667L6.6133 16.615L7.77996 11.6217L3.90663 8.26167L9.01663 7.81833L11 3.11667L12.995 7.83L18.105 8.27333L14.2316 11.6333L15.3983 16.6267L11 13.9667Z" fill="white"></path></g><defs><filter id="filter0_d" x="0.0168457" y="0.15625" width="21.9697" height="21.0934" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></button></div>
                        <div className="sc-fFSPTT iQmpbw card-row"><a className="sc-iemWCZ bhFgxG" onClick={e => openLayer(e)}><div className="card-image"><img src={Images.Img4} alt="image" /></div><div className="sc-dIvrsQ jPPVFO"><strong className="typo-emphasis"><svg width="0.5rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.66683V3.78016C0 4.1335 0.14 4.4735 0.393333 4.72683L2.66667 7.00016L0.386667 9.28016C0.14 9.5335 0 9.8735 0 10.2268V12.3335C0 13.0668 0.6 13.6668 1.33333 13.6668H6.66667C7.4 13.6668 8 13.0668 8 12.3335V10.2268C8 9.8735 7.86 9.5335 7.61333 9.28683L5.33333 7.00016L7.60667 4.7335C7.86 4.48016 8 4.14016 8 3.78683V1.66683C8 0.933496 7.4 0.333496 6.66667 0.333496H1.33333C0.6 0.333496 0 0.933496 0 1.66683Z" fill="#fff"></path></svg>0</strong><p className="typo-body2">고양이7</p><p className="typo-body1">고양이7 입니다</p><p className="typo-body1 basket"><svg width="0.875rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8333 4.24989H10.0391L7.48409 0.423223C7.37325 0.259889 7.18658 0.178223 6.99992 0.178223C6.81325 0.178223 6.62659 0.259889 6.51575 0.429056L3.96075 4.24989H1.16659C0.845752 4.24989 0.583252 4.51239 0.583252 4.83322C0.583252 4.88572 0.589085 4.93822 0.606585 4.99072L2.08825 10.3982C2.22242 10.8882 2.67159 11.2499 3.20825 11.2499H10.7916C11.3283 11.2499 11.7774 10.8882 11.9174 10.3982L13.3991 4.99072L13.4166 4.83322C13.4166 4.51239 13.1541 4.24989 12.8333 4.24989ZM6.99992 1.79989L8.63325 4.24989H5.36658L6.99992 1.79989ZM10.7916 10.0832L3.21409 10.0891L1.93075 5.41655H12.0749L10.7916 10.0832ZM6.99992 6.58322C6.35825 6.58322 5.83325 7.10822 5.83325 7.74989C5.83325 8.39155 6.35825 8.91655 6.99992 8.91655C7.64158 8.91655 8.16658 8.39155 8.16658 7.74989C8.16658 7.10822 7.64158 6.58322 6.99992 6.58322Z" fill="#FC9144"></path></svg>No information</p><p className="typo-body1 time"><svg width="0.75rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8334 2.3248L9.15008 0.0498047L8.39175 0.924805L11.0751 3.1998L11.8334 2.3248ZM3.60841 0.983138L2.85008 0.108138L0.166748 2.3248L0.925081 3.1998L3.60841 0.983138ZM6.29175 3.66647H5.41675V7.16647L8.15842 8.85814L8.62508 8.15814L6.29175 6.75814V3.66647ZM6.00008 1.33314C3.08342 1.33314 0.750081 3.66647 0.750081 6.58314C0.750081 9.4998 3.08342 11.8331 6.00008 11.8331C8.91675 11.8331 11.2501 9.4998 11.2501 6.58314C11.2501 3.66647 8.91675 1.33314 6.00008 1.33314ZM6.00008 10.6665C3.72508 10.6665 1.91675 8.85814 1.91675 6.58314C1.91675 4.30814 3.72508 2.4998 6.00008 2.4998C8.27508 2.4998 10.0834 4.30814 10.0834 6.58314C10.0834 8.85814 8.27508 10.6665 6.00008 10.6665Z" fill="#EF5DA8"></path></svg>September 15th, 2021</p></div></a><button className="btn-favorite"><svg width="1.375rem" height="1.375rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M19.925 6.54667L14.2783 6.05667L12.0733 0.865C11.6766 -0.08 10.3233 -0.08 9.92663 0.865L7.72163 6.06833L2.08663 6.54667C1.05996 6.62833 0.639963 7.91167 1.42163 8.58833L5.7033 12.2983L4.41996 17.805C4.18663 18.8083 5.27163 19.6017 6.1583 19.065L11 16.1483L15.8416 19.0767C16.7283 19.6133 17.8133 18.82 17.58 17.8167L16.2966 12.2983L20.5783 8.58833C21.36 7.91167 20.9516 6.62833 19.925 6.54667ZM11 13.9667L6.6133 16.615L7.77996 11.6217L3.90663 8.26167L9.01663 7.81833L11 3.11667L12.995 7.83L18.105 8.27333L14.2316 11.6333L15.3983 16.6267L11 13.9667Z" fill="white"></path></g><defs><filter id="filter0_d" x="0.0168457" y="0.15625" width="21.9697" height="21.0934" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></button></div>
                        <div className="sc-fFSPTT iQmpbw card-row"><a className="sc-iemWCZ bhFgxG" onClick={e => openLayer(e)}><div className="card-image"><img src={Images.Img5} alt="image" /></div><div className="sc-dIvrsQ jPPVFO"><strong className="typo-emphasis"><svg width="0.5rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.66683V3.78016C0 4.1335 0.14 4.4735 0.393333 4.72683L2.66667 7.00016L0.386667 9.28016C0.14 9.5335 0 9.8735 0 10.2268V12.3335C0 13.0668 0.6 13.6668 1.33333 13.6668H6.66667C7.4 13.6668 8 13.0668 8 12.3335V10.2268C8 9.8735 7.86 9.5335 7.61333 9.28683L5.33333 7.00016L7.60667 4.7335C7.86 4.48016 8 4.14016 8 3.78683V1.66683C8 0.933496 7.4 0.333496 6.66667 0.333496H1.33333C0.6 0.333496 0 0.933496 0 1.66683Z" fill="#fff"></path></svg>0</strong><p className="typo-body2">고양이7</p><p className="typo-body1">고양이7 입니다</p><p className="typo-body1 basket"><svg width="0.875rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8333 4.24989H10.0391L7.48409 0.423223C7.37325 0.259889 7.18658 0.178223 6.99992 0.178223C6.81325 0.178223 6.62659 0.259889 6.51575 0.429056L3.96075 4.24989H1.16659C0.845752 4.24989 0.583252 4.51239 0.583252 4.83322C0.583252 4.88572 0.589085 4.93822 0.606585 4.99072L2.08825 10.3982C2.22242 10.8882 2.67159 11.2499 3.20825 11.2499H10.7916C11.3283 11.2499 11.7774 10.8882 11.9174 10.3982L13.3991 4.99072L13.4166 4.83322C13.4166 4.51239 13.1541 4.24989 12.8333 4.24989ZM6.99992 1.79989L8.63325 4.24989H5.36658L6.99992 1.79989ZM10.7916 10.0832L3.21409 10.0891L1.93075 5.41655H12.0749L10.7916 10.0832ZM6.99992 6.58322C6.35825 6.58322 5.83325 7.10822 5.83325 7.74989C5.83325 8.39155 6.35825 8.91655 6.99992 8.91655C7.64158 8.91655 8.16658 8.39155 8.16658 7.74989C8.16658 7.10822 7.64158 6.58322 6.99992 6.58322Z" fill="#FC9144"></path></svg>No information</p><p className="typo-body1 time"><svg width="0.75rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8334 2.3248L9.15008 0.0498047L8.39175 0.924805L11.0751 3.1998L11.8334 2.3248ZM3.60841 0.983138L2.85008 0.108138L0.166748 2.3248L0.925081 3.1998L3.60841 0.983138ZM6.29175 3.66647H5.41675V7.16647L8.15842 8.85814L8.62508 8.15814L6.29175 6.75814V3.66647ZM6.00008 1.33314C3.08342 1.33314 0.750081 3.66647 0.750081 6.58314C0.750081 9.4998 3.08342 11.8331 6.00008 11.8331C8.91675 11.8331 11.2501 9.4998 11.2501 6.58314C11.2501 3.66647 8.91675 1.33314 6.00008 1.33314ZM6.00008 10.6665C3.72508 10.6665 1.91675 8.85814 1.91675 6.58314C1.91675 4.30814 3.72508 2.4998 6.00008 2.4998C8.27508 2.4998 10.0834 4.30814 10.0834 6.58314C10.0834 8.85814 8.27508 10.6665 6.00008 10.6665Z" fill="#EF5DA8"></path></svg>September 15th, 2021</p></div></a><button className="btn-favorite"><svg width="1.375rem" height="1.375rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M19.925 6.54667L14.2783 6.05667L12.0733 0.865C11.6766 -0.08 10.3233 -0.08 9.92663 0.865L7.72163 6.06833L2.08663 6.54667C1.05996 6.62833 0.639963 7.91167 1.42163 8.58833L5.7033 12.2983L4.41996 17.805C4.18663 18.8083 5.27163 19.6017 6.1583 19.065L11 16.1483L15.8416 19.0767C16.7283 19.6133 17.8133 18.82 17.58 17.8167L16.2966 12.2983L20.5783 8.58833C21.36 7.91167 20.9516 6.62833 19.925 6.54667ZM11 13.9667L6.6133 16.615L7.77996 11.6217L3.90663 8.26167L9.01663 7.81833L11 3.11667L12.995 7.83L18.105 8.27333L14.2316 11.6333L15.3983 16.6267L11 13.9667Z" fill="white"></path></g><defs><filter id="filter0_d" x="0.0168457" y="0.15625" width="21.9697" height="21.0934" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></button></div>
                        <CardSample size="small" action={openLayer} /> 
                    </div>
                    {/* <StyledFullButtonWrap>
                        <Button2 children="Load more Recommendation" fullSize={true} />
                    </StyledFullButtonWrap> */}
                </div>

                <div className="collection-items">
                    <ListTitle title={<span>Most Popular</span>} more="See All Rankings" />
                    <StyledScrollWrap>
                        <div className="list list-scroll">
                            {/* <CardTypeRow size="medium" /> */}
                            <CardSample size="medium" action={openLayer} />
                            <CardSample size="medium" action={openLayer} />
                            <CardSample size="medium" action={openLayer} />
                            <CardSample size="medium" action={openLayer} />
                            <CardSample size="medium" action={openLayer} />
                        </div>
                    </StyledScrollWrap>
                </div>
            </div>
       
            <div className="sc-dlnjwi dZRKXH popup" style={{display: modalVisible?'block':'none'}}>
            <div className="popup-inner">
                <div className="popup-header">
                    <h1 className="sc-pNWdM eHKJgs"><span>Sale NFT</span></h1>
                    <button className="sc-jJMGnK jFCSIy popup-close" onClick={e => closeLayer(e)}>
                        <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1672 0.844141C14.7235 0.400455 14.0068 0.400455 13.5631 0.844141L8 6.39591L2.43686 0.832765C1.99317 0.389078 1.27645 0.389078 0.832765 0.832765C0.389078 1.27645 0.389078 1.99317 0.832765 2.43686L6.39591 8L0.832765 13.5631C0.389078 14.0068 0.389078 14.7235 0.832765 15.1672C1.27645 15.6109 1.99317 15.6109 2.43686 15.1672L8 9.6041L13.5631 15.1672C14.0068 15.6109 14.7235 15.6109 15.1672 15.1672C15.6109 14.7235 15.6109 14.0068 15.1672 13.5631L9.6041 8L15.1672 2.43686C15.5995 2.00455 15.5995 1.27645 15.1672 0.844141Z" fill="white"></path>
                        </svg>
                    </button>
                    <h1 className="sc-fujyAs gZkLDR"></h1>
                </div>
                <div className="popup-content">
                    <div>
                        <div className="sc-bkbkJK dCBajj card-col">
                            <a className="sc-iemWCZ bhFgxG">
                            <div className="card-image"><img src="https://d120c3intw9gvs.cloudfront.net/contents/asset/0x3878d504f38344d502baab0bd6a9e382c51e7edc/1634830866_7.jpg" alt="image" /></div>
                            <div className="sc-dIvrsQ jPPVFO">
                                <p className="typo-body2 status list">
                                    <span>
                                        <svg width="1.1875rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13 0C13.67 0 14.27 0.33 14.63 0.84L18.59 6.42C18.84 6.77 18.84 7.23 18.59 7.58L14.63 13.16C14.27 13.67 13.67 14 13 14L2 13.99C0.9 13.99 0 13.1 0 12V2C0 0.9 0.9 0.0100002 2 0.0100002L13 0ZM13.5 8.5C14.3284 8.5 15 7.82843 15 7C15 6.17157 14.3284 5.5 13.5 5.5C12.6716 5.5 12 6.17157 12 7C12 7.82843 12.6716 8.5 13.5 8.5Z" fill="#76ADFF"></path>
                                        </svg>
                                    </span>
                                    고양이7
                                </p>
                                <p className="typo-body2">고양이7 입니다</p>
                                <p className="typo-body2 status transfer">
                                    <span>
                                        <svg width="1.125rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.801761 9.1074L3.44757 11.6926C3.74154 11.9891 4.25363 11.7853 4.25363 11.3683L4.25363 9.70969L9.95302 9.70969C10.4746 9.70969 10.9013 9.29272 10.9013 8.78309C10.9013 8.27347 10.4746 7.8565 9.95302 7.8565L4.25363 7.8565L4.25363 6.1979C4.25363 5.78093 3.74154 5.57708 3.44756 5.87359L0.801761 8.45879C0.621581 8.63484 0.621581 8.93135 0.801761 9.1074ZM13.7558 2.29694L8.05638 2.29694C7.53481 2.29694 7.10807 2.71391 7.10807 3.22354C7.10807 3.73316 7.53481 4.15013 8.05638 4.15013L13.7558 4.15013L13.7558 5.80873C13.7558 6.2257 14.2679 6.42955 14.5618 6.13304L17.1982 3.54784C17.3783 3.36253 17.3783 3.07528 17.1982 2.88996L14.5618 0.304769C14.2679 0.00825918 13.7558 0.221376 13.7558 0.629076L13.7558 2.29694Z" fill="#EF5DA8"></path>
                                        </svg>
                                    </span>
                                    RaftnCompany | RINKEBY
                                </p>
                                <strong className="typo-emphasis">
                                    <svg width="0.5rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.66683V3.78016C0 4.1335 0.14 4.4735 0.393333 4.72683L2.66667 7.00016L0.386667 9.28016C0.14 9.5335 0 9.8735 0 10.2268V12.3335C0 13.0668 0.6 13.6668 1.33333 13.6668H6.66667C7.4 13.6668 8 13.0668 8 12.3335V10.2268C8 9.8735 7.86 9.5335 7.61333 9.28683L5.33333 7.00016L7.60667 4.7335C7.86 4.48016 8 4.14016 8 3.78683V1.66683C8 0.933496 7.4 0.333496 6.66667 0.333496H1.33333C0.6 0.333496 0 0.933496 0 1.66683Z" fill="#fff"></path>
                                    </svg>
                                    0<span className="typo-span bar"></span><span className="typo-span">RINKEBY_ETHER</span><span className="typo-span unit">RINKEBY</span>
                                </strong>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div><div className="sc-bkbkJK dCBajj card-col"><a className="sc-iemWCZ bhFgxG"><div className="card-image"><img src="https://d120c3intw9gvs.cloudfront.net/contents/asset/0x3878d504f38344d502baab0bd6a9e382c51e7edc/1634833545_1.jpg" alt="image" /></div><div className="sc-dIvrsQ jPPVFO"><p className="typo-body2 status list"><span><svg width="1.1875rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13 0C13.67 0 14.27 0.33 14.63 0.84L18.59 6.42C18.84 6.77 18.84 7.23 18.59 7.58L14.63 13.16C14.27 13.67 13.67 14 13 14L2 13.99C0.9 13.99 0 13.1 0 12V2C0 0.9 0.9 0.0100002 2 0.0100002L13 0ZM13.5 8.5C14.3284 8.5 15 7.82843 15 7C15 6.17157 14.3284 5.5 13.5 5.5C12.6716 5.5 12 6.17157 12 7C12 7.82843 12.6716 8.5 13.5 8.5Z" fill="#76ADFF"></path></svg></span> 고양이1</p><p className="typo-body2">고양이1 입니다</p><p className="typo-body2 status transfer"><span><svg width="1.125rem" height="0.75rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.801761 9.1074L3.44757 11.6926C3.74154 11.9891 4.25363 11.7853 4.25363 11.3683L4.25363 9.70969L9.95302 9.70969C10.4746 9.70969 10.9013 9.29272 10.9013 8.78309C10.9013 8.27347 10.4746 7.8565 9.95302 7.8565L4.25363 7.8565L4.25363 6.1979C4.25363 5.78093 3.74154 5.57708 3.44756 5.87359L0.801761 8.45879C0.621581 8.63484 0.621581 8.93135 0.801761 9.1074ZM13.7558 2.29694L8.05638 2.29694C7.53481 2.29694 7.10807 2.71391 7.10807 3.22354C7.10807 3.73316 7.53481 4.15013 8.05638 4.15013L13.7558 4.15013L13.7558 5.80873C13.7558 6.2257 14.2679 6.42955 14.5618 6.13304L17.1982 3.54784C17.3783 3.36253 17.3783 3.07528 17.1982 2.88996L14.5618 0.304769C14.2679 0.00825918 13.7558 0.221376 13.7558 0.629076L13.7558 2.29694Z" fill="#EF5DA8"></path></svg></span>RaftnCompany | RINKEBY</p><strong className="typo-emphasis"><svg width="0.5rem" height="0.875rem" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.66683V3.78016C0 4.1335 0.14 4.4735 0.393333 4.72683L2.66667 7.00016L0.386667 9.28016C0.14 9.5335 0 9.8735 0 10.2268V12.3335C0 13.0668 0.6 13.6668 1.33333 13.6668H6.66667C7.4 13.6668 8 13.0668 8 12.3335V10.2268C8 9.8735 7.86 9.5335 7.61333 9.28683L5.33333 7.00016L7.60667 4.7335C7.86 4.48016 8 4.14016 8 3.78683V1.66683C8 0.933496 7.4 0.333496 6.66667 0.333496H1.33333C0.6 0.333496 0 0.933496 0 1.66683Z" fill="#fff"></path></svg>0<span className="typo-span bar"></span><span className="typo-span">RINKEBY_ETHER</span><span className="typo-span unit">RINKEBY</span></strong></div></a></div></div>
                </div>
                </div>
            </div>
        </PageBg>
    )
}
