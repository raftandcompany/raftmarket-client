import styled from 'styled-components';
import { buttonCommon } from 'style/buttonCommonStyle';
import { rem, radiusBox } from 'style/common/mixin';

export const EllipseButton = styled(buttonCommon)`
    ${props => `
        height:${rem(props.height)};
        line-height: ${rem(props.height)};
        border-radius: ${rem(props.height/2)};
        `
    };
`;

export const BorderRadiusButton = styled(buttonCommon)`
    ${props => radiusBox};
    ${props => props.unactive ? `opacity:0.4` : null};
`;

export const RoundButton = styled(buttonCommon)`
    ${props => {
        let height = 44;
        if (props.height) {
            height = props.height
        }
        return `
        width:${rem(height)};
        max-width:${rem(height)};
        height:${rem(height)};
        `
    }};
    position:relative;
    padding:0;
    line-height: 0;
    border-radius: 50%;

    svg {
        margin:auto;
    }

    span {
        display:block;
        position:absolute;
        top:calc(100% + ${rem(8)});
        left:0;
        width:100%;
        line-height:${rem(16)};
        text-align:center;
        color:white;
        font-size:${rem(12)};
        font-weight:normal;
        white-space:normal;
    }
    & + & {
        margin-left: ${rem(11)};
    }
`;

export const StyledButtonWrap = styled.div`
    display:flex;
    padding-top: ${rem(24)};
    width: 100%;

    button + button {
        margin-left: ${rem(11)};
    }
`;


export const StyledFullButtonWrap = styled.div`
    padding-top: ${rem(24)};
    width: 100%;
`;
