import styled from 'styled-components';
import { color } from 'style/common/variable';
import { rem } from 'style/common/mixin';



export const UtilBox = styled.div`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: ${rem(44)};
    button {
        display: inline-block;
        height:${rem(44)};
        vertical-align:top;
        svg {
            vertical-align:middle;
        }
    }
    .rightbox {
        margin: 0 0 0 auto;
        float:right;
        > button {
            margin:0 ${rem(14)};
        }
    }
`;

export const ShareBox = styled.div`

`;

export const ShareBtn = styled.div`
    /* display:block;
    padding-bottom: ${rem(12)};
    line-height: ${rem(20)};
    font-size: ${rem(15)};
    color: ${color.purpleLight};
    ${props => {
        if (props.valid === false) return `
        color: ${color.red};
        `
    }}; */
`;
