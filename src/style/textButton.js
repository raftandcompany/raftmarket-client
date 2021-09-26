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

    position: relative;
    display: block;
    margin: 0 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    font-size: ${rem(14)};
    line-height: ${rem(20)};
    font-weight: 500;

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

export const TabButton = styled.button`
    flex: 1;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: ${rem(4)} solid ${color.blackCard};
    span {
        font-weight: 600;
        color:${color.blackLight};
        font-size: ${rem(16)};
        transition: color 0.2s;
    }
    &.active {
        border-color: ${color.white};
        span {
            color:${color.white};
        }
    }
`;