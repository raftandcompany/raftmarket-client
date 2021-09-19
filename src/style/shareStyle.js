import styled from 'styled-components';
import { buttonCommon } from 'style/buttonCommonStyle';
import { color } from 'style/common/variable';
import { rem, radiusBox } from 'style/common/mixin';

//ShareBox, ShareBtn
export const StyledInputWrap = styled.div`
    padding-bottom: ${rem(20)};

    .search-area {
        position:relative;
        padding-top: ${rem(28)};
        height: ${rem(72)};

        > a {
            float: left;
        }
        .search-box {
            position:relative;
            float:left;
            width: calc(100% - ${rem(44)});
            input {
                padding-left: ${rem(44)};
            }
            a {
                position:absolute;
                left:0;top:0;
            }
            & + a {
                margin-right: ${rem(-10)};
            }
        }
        a {
            background-color:transparent;
            span {
                display:none;
            }

        }
        i {
            display:block;
            position:absolute;
            right: ${rem(-1)};
            top: ${rem(39)};
            width: ${rem(4.67)};
            height: ${rem(4.67)};
            border-radius:50%;
            background-color: ${color.blueDark};
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
