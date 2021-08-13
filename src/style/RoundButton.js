import styled from 'styled-components';
import { buttonCommon } from './buttonCommonStyle';
import { rem } from './common/mixin';

export const EllipseButton = styled(buttonCommon)`
    ${props => `
        height:${rem(props.height)};
        line-height: ${rem(props.height)};
        border-radius: ${rem(props.height/2)};
        `
    };
`;

export const BorderRadiusButton = styled(buttonCommon)`
    ${props => `
        height:${rem(props.height)};
        line-height: ${rem(props.height)};
        border-radius: ${rem(props.radius)};
        `
    };
`;

export const RoundButton = styled(buttonCommon)`
    ${props => {
        let height = 44;
        if (props.height) {
            height = props.height
        }
        return `
        padding:0;
        width:${rem(height)};
        height:${rem(height)};
        line-height: 0;
        border-radius: 50%;
        font-size:0;
        color:transparent;
        `
    }};
    svg {
        margin:auto;
    }
`;
