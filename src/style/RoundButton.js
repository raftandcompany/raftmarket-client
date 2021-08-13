import styled from 'styled-components';
import { buttonCommon } from './buttonCommonStyle';
import { rem } from './common/mixin';

export const RoundButton = styled(buttonCommon)`
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
