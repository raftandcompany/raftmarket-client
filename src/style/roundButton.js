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
        height:${rem(height)};
        `
    }};
    padding:0;
    line-height: 0;
    border-radius: 50%;
    font-size:0;
    color:transparent;

    svg {
        margin:auto;
    }
`;
