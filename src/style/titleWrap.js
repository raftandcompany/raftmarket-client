import styled from 'styled-components';
import { rem } from 'style/common/mixin';

export const TitleWrap = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    padding-bottom : ${rem(12)};
`;
