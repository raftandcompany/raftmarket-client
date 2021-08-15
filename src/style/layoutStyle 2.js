import styled, { keyframes } from 'styled-components'
import * as Ani from 'style/ani'

export const Body = styled.div`
  position: absolute;
`;

export const Popup = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
`;

export const PageBg = styled.div`
  position: ${props => props.isPopup === true ? "absolute" : "relative" };
  animation: 0.5s ${props => props.ani || Ani.fadeIn};
  padding: 4em;
  background: ${props => props.color || "black"};
  left: 0;
  top: 0;
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