import styled from 'styled-components';
import { color } from 'style/common/variable';
import { rem } from 'style/common/mixin';

/* 버튼 공통 스타일 */
export const setButtonType = type => {
    switch (type) {
        case 'purple' :
            return `background-color:${color.purpleDark} !important;color:${color.white} !important;`;
        case 'white' :
            return `background-color:${color.white} !important;color:${color.black} !important;`;
        case 'blue' :
            return `background-color:${color.blueDark}!important;color:${color.white} !important;`;
        default :
            return `background-color:${color.blackLight} !important;color:${color.white} !important;`;
    }
}

export const buttonCommon = styled.button`
    display: inline-flex;
    font-weight: bold;
    justify-content: center;
    cursor: pointer;
    padding-left: ${rem(26)};
    padding-right: ${rem(26)};

    ${({ type }) => setButtonType(type)};
    ${props => props.fullSize ? `width:100%` : null};
    ${props => props.border ? `
        border:1px solid ${color.purpleLight};
        background-color:transparent;
        color:${color.purpleLight};
        ` : null
    };
    ${props => props.grow ? `flex-grow:${props.grow}` : null};
    flex-basis: ${rem(64)};
    font-size:${props => rem(props.fontSize) || rem(12)};

    &:disabled {
        cursor : default;
        color: ${color.gray2};
    }

`;

// function Button({ children, disabled, type }) {
//   return <RoundButton disabled={disabled} type={type}>{children}</RoundButton>;
// }
//
// export default Button;
