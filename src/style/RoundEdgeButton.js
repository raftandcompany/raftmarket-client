import styled from 'styled-components';
import { color } from './common/variable';
import { rem } from './common/mixin';

const setButtonType = type => {
    switch (type) {
        case 'active' :
            return `background-color:${color.purpleDark};color:${color.white};`;
        case 'reset' :
            return `background-color:${color.white};color:${color.black};`;
        case 'apply' :
            return `background-color:${color.blueDark};color:${color.white};`;
        default :
            return `background-color:${color.blackLight};color:${color.white};`;
    }
}

export const RoundEdgeButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    padding-left: ${rem(28)};
    padding-right: ${rem(28)};

    ${({ type }) => setButtonType(type)};

    /* 크기*/
    height: ${rem(44)};
    line-height: ${rem(44)};
    border-radius: ${rem(22)};
    font-size: ${rem(14)};

    &:disabled {
        cursor : default;
        color: ${color.gray2};
    }

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;
