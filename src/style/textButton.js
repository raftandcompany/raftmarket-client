import styled from 'styled-components';
import { buttonCommon } from './buttonCommonStyle';
import { rem } from './common/mixin';

export const MoreButton = styled.a`
    ${props => `
        position: relative;
        display: block;
        margin: 0 -15px 0 auto;
        padding: 15px 15px 11px 19px;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        font-size: 1.3rem;
        line-height: 1.9rem;
        color: ${props.color};
        font-weight: 400;
        letter-spacing: -1px;
        `
    };

`;
