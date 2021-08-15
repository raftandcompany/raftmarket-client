import styled from 'styled-components';
import { rem } from 'style/common/mixin';

export const MoreButton = styled.a`
    ${props => `
        position: relative;
        display: block;
        margin: 0 ${rem(-15)} 0 auto;
        padding-top: ${rem(4)};
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        font-size: ${rem(14)};
        line-height: ${rem(20)};
        color: ${props.color};
        font-weight: 500;
        `
    };
`;
