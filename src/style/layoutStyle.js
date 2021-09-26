import styled, { keyframes } from 'styled-components'
import * as Ani from 'style/ani'
import * as Var from 'style/common/variable'
import { rem, radiusBox, ellipsis, typoBody1, typoBody2 } from 'style/common/mixin';

export const Body = styled.div`
    margin:0 auto;
    max-width:1920px;
    width: 100%;
    height: 100%;

    .typo-emphasis {
        display: block;
        color: ${Var.color.white};
        svg {
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body1 {
        ${typoBody1};
        ${ellipsis};
        margin-bottom: ${rem(6)};

        & + .typo-body1 {
            margin-top: ${rem(4)};
        }
        &.pre {
            color: ${Var.color.gray3} !important;
        }
        &.basket {
            color: ${Var.color.orange} !important;
        }
        &.time {
            color: ${Var.color.pink} !important;
        }
        svg {
            margin-right: ${rem(5)};
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body2 {
        ${typoBody2};
        ${ellipsis};
        margin-bottom: ${rem(6)};
        color: ${Var.color.gray3};
        &.status {
            display:flex;
            align-items:center;
            line-height: ${rem(28)};
            font-size: ${rem(16)};
            span {
                margin-right: ${rem(8)};
                svg {
                    vertical-align: ${rem(-3)};
                }
            }
        }
        &.cart {
            color: ${Var.color.purpleLight};
        }
        &.list {
            color: ${Var.color.blueLight};
        }
        &.offer {
            color: ${Var.color.orange};
        }
        &.transfer {
            color: ${Var.color.pink};
        }
    }

    .owner {
        display:flex;
        align-items:center;
        clear: both;
        margin-top: ${rem(22)};
        //height: ${rem(20)};
        > * {
            display:flex;
            align-items:center;
        }
        svg {
            margin: 0 ${rem(16)};
        }
        .type-owner {
            //margin-top:${rem(2)};
            margin-left: ${rem(8)};
            color: ${Var.color.blueLight};
            text-transform: capitalize;
            font-size: ${rem(13)};
        }
    }

    .detailbox {
        padding-top: ${rem(56)};
        .owner {
            margin-top: ${rem(10)};
            margin-bottom: ${rem(16)};
            .user-img {
                width: ${rem(24)};
                height: ${rem(24)};
            }
            .text {
                line-height: ${rem(20)};
                font-size: ${rem(14)};
                border-bottom: 1px solid ${Var.color.gray3};
            }
        }
    }
    .card-image {
        overflow: hidden;
        position: relative;
        padding-top: 100%;
        border-radius: ${rem(8)};
        img {
            position:absolute;
            left:0;
            top:0;
            object-fit: cover;
        }
    }
    .text-sub {
        color: ${Var.color.blueLight};
    }
    .tab {
        width: 100%;
        height: ${rem(56)};
        display: flex;
        justify-content: center;
    }
    .tab-content {

    }
    .title-history {
        
       button {
            padding-left: ${rem(22)};
            > span {
                width: 100%;
                text-align:left;
            }
           .text-sub {
                font-size: ${rem(14)};
           }
           svg {
               float:right;
               margin-top:${rem(19)};
           }
       }
    }
    .price {
        svg {
            margin-right:${rem(12)};
        }
        .text-sub {
            margin-left:${rem(12)};
            font-size:${rem(14)};
        }
    }
    .current-price {
        position:relative;
        margin-left:${rem(-16)};
        padding:${rem(16)};
        width:calc(100% + ${rem(32)});
        height:${rem(104)};
        border-top:1px solid ${Var.color.blackLight};
        border-top-left-radius:${rem(8)};
        border-top-right-radius:${rem(8)};
        background-color:${Var.color.blackCard};
        .typo-body1 {
            margin-bottom:${rem(15)};
            color:${Var.color.gray3};
        }
        button {
            position:absolute;
            top:${rem(16)};
            right:${rem(20)};
        }
    }
    .accordion {
        &-item {
            padding-top:${rem(4)};
            &:not(:first-child) {
                border-top: 1px solid #2F313E;
            }
        }
        &-button {
            ${radiusBox};
            display:block;
            width:100%;
            text-align:left;
            strong {
                float:left;
                font-size:${rem(18)};
                text-transform:capitalize;
                span {
                    margin-left:${rem(12)};
                    font-size:${rem(16)};
                }
            }
            svg {
                float:right;   
                margin-top:${rem(20)};
            }
            &.show {
                svg {
                    transform:rotate(180deg);
                }
            }
            &.offers + button {
                margin-top:${rem(4)};
                margin-bottom:${rem(24)};
            }
        }
        &-cont {
            display:none;
            overflow:hidden;

            > div {
                ${radiusBox};
                margin-bottom:${rem(24)};
                padding-top:${rem(12)};
                padding-bottom:${rem(12)};
                border-radius:${rem(16)};
                height:auto;
                font-size:${rem(13)};
                background:${Var.color.blackCard};
                &.market {
                    position:relative;
                    .owner {
                        margin-top:0;
                    }
                    button {
                        position:absolute;
                        text-transform:uppercase;
                        width:${rem(90)};
                        right:${rem(16)};
                        bottom:${rem(20)};
                    }
                }
                &.about {
                    float:left;
                    border:1px solid ${Var.color.purpleLight};
                    width:calc(50% - ${rem(6)});
                    &:nth-child(even) {
                        margin-left:${rem(12)};
                    }
                    .label {
                        color:${Var.color.purpleLight};
                    }
                    .item {
                        padding:${rem(6)} 0 ${rem(20)};
                        font-size:${rem(14)};
                        color:${Var.color.white};
                    }
                    .rarity {
                        font-size:${rem(14)};
                    }
                    .typo-span {
                        display:block;
                        line-height:1.45;
                    }
                }
            }
            .price {
                ${radiusBox};
                background:${Var.color.black};
            }
            .typo-span {
                color:${Var.color.gray2};
            }
            &.show {
                display:block;
            }
        }
    }
    .close-button {
        position:absolute;
        top:0;
        right:0;
        padding:${rem(24)};
        width:${rem(65)};
        height:${rem(65)};
        cursor:pointer;
    }
`;

export const Popup = styled.div`
  position: fixed;
  z-index:999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => props.hasPopup ? "auto" : "none" };
`;

export const PageBg = styled.div`
  position: ${props => props.isPopup ? "absolute" : "relative" };
  animation: 0.5s ${props => props.ani || Ani.fadeIn};
  padding: ${rem(16)} ${rem(16)} ${rem(80)};
  background: ${props => props.color || Var.color.black};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;



export const ContentBox = styled.div`
  padding: 4em;
  background: yellow;
`;

export const Table = styled.div`
  padding: 4em;
  background: blanchedalmond;
`;


export const Tab = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    animation: ls ${Ani.fadeIn};
    padding-bottom:${rem(6)};
    width: 100%;
    height: ${rem(72)};
    display: flex;
    justify-content: center;
    border-top:1px solid ${Var.color.gray2};
    background-color:${Var.color.blackCard};
`;



export const Button = styled.button`
    flex: 1;
    min-width: 80px;
    background-color:${Var.color.blackCard};

    > span {
        width: 100%;
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        svg {
            fill: currentColor;
            display: inline-block;
            height: ${rem(24)};
            flex-shrink: 0;
            user-select: none;
            path {
                transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
        }
        span {
            color:${Var.color.gray1};
            font-size: ${rem(13)};
            transition: color 0.2s;
        }
    }
    &.active {
        path {
            fill: ${Var.color.white};
        }
        span {
            color:${Var.color.white};
        }
    }
`;

export const StyledScrollWrap = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    line-height: 0;
    white-space: nowrap;

    ::-webkit-scrollbar {
        display: none;
    }

    > div {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: inline-flex;
        min-height: ${rem(132)};
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        vertical-align: top;
        padding: ${rem(4)} 0 ${rem(24)};
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;
