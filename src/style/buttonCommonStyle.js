import styled from 'styled-components';
import { color } from 'style/common/variable';
import { rem } from 'style/common/mixin';

/* 버튼 공통 스타일 */
export const setButtonType = type => {
    switch (type) {
        case 'purple' :
            return `background-color:${color.purpleDark};color:${color.white};`;
        case 'white' :
            return `background-color:${color.white};color:${color.black};`;
        case 'blue' :
            return `background-color:${color.blueDark};color:${color.white};`;
        default :
            return `background-color:${color.blackLight};color:${color.white};`;
    }
}

export const buttonCommon = styled.button`
    display: inline-flex;
    font-weight: bold;
    justify-content: center;
    cursor: pointer;
    padding-left: ${rem(28)};
    padding-right: ${rem(28)};

    ${({ type }) => setButtonType(type)};
    ${props => props.fullSize ? `width:100%` : null};
    ${props => props.border ? `
        border:1px solid ${color.purpleLight};
        background-color:transparent;
        color:${color.purpleLight};
        ` : null
    };
    font-size:${props => rem(props.fontSize) || rem(12)};

    &:disabled {
        cursor : default;
        color: ${color.gray2};
    }

    /* 기타
    & + & {
        margin-left: 1rem;
    }*/
`;

// function Button({ children, disabled, type }) {
//   return <RoundButton disabled={disabled} type={type}>{children}</RoundButton>;
// }
//
// export default Button;
