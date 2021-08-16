import styled from 'styled-components';
import { color } from 'style/common/variable';
import { rem } from 'style/common/mixin';

const setColor = type => {
    switch (type) {
        case 'blue' :
            return `color:${color.blueLight};`;
        default :
            return `color:${color.white};`;
    }
}

export const MoreButton = styled.a`
    ${({ type }) => setColor(type)};

    ${props => `
        position: relative;
        display: block;
        margin: 0 ${rem(-15)} 0 auto;
        padding-top: ${rem(6)};
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        font-size: ${rem(14)};
        line-height: ${rem(20)};
        font-weight: 500;
        `
    };

    span {
        display:inline-block;
        line-height:${rem(14)};
        vertical-align:top;
    }

    svg {
        margin-left:${rem(12)};
        vertical-align:top;
    }
`;
