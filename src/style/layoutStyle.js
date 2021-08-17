import styled, { keyframes } from 'styled-components'
import * as Ani from 'style/ani'
import * as Var from 'style/common/variable'
import {rem} from 'style/common/mixin'

export const Body = styled.div`
  position: absolute;
`;

export const Popup = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => props.hasPopup ? "auto" : "none" };
`;

export const PageBg = styled.div`
  position: ${props => props.isPopup === true ? "absolute" : "relative" };
  animation: 0.5s ${props => props.ani || Ani.fadeIn};
  padding: ${rem(16)};
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
  animation: ls ${Ani.fadeIn};
  display: table;
  padding: 4em;
  background: blanchedalmond;
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
        min-width: 100%;
        height: ${rem(132)};
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        vertical-align: top;
        padding: ${rem(24)} 0 ;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;
