import styled, { keyframes } from 'styled-components'
import * as Ani from 'style/ani'
import * as Var from 'style/common/variable'
import {rem} from 'style/common/mixin'

export const Body = styled.div`
    margin:0 auto;
    max-width:1920px;
    width: 100%;
    height: 100%;
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
