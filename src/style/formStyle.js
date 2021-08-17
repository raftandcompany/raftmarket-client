import styled from 'styled-components';
import { buttonCommon } from 'style/buttonCommonStyle';
import { color } from 'style/common/variable';
import { rem, radiusBox } from 'style/common/mixin';


export const StyledInputWrap = styled.div`
    padding-bottom: ${rem(20)};
`;

export const StyledInput = styled.input.attrs(props => ({
    type: props.type || 'text',
    placeholder: props.placeHolder
}))`
    ${props => radiusBox};

    padding: ${rem(16)};
    width:100%;
    color:white;
    background-color: ${color.blackCard};

    ${props => {
        if (props.valid === false) return `
        border:1px solid ${color.red};
        ::placeholder {
            color: ${color.red};
        }
        `
        else return `
        ::placeholder {
            color: ${color.gray1};
        }
        `
    }};
    :not(:disabled) {
        :focus::placeholder {
            color: transparent;
        }
    }
`;

export const StyledLabel = styled.label`
    display:block;
    padding-bottom: ${rem(12)};
    line-height: ${rem(20)};
    font-size: ${rem(15)};
    color: ${color.purpleLight};
    ${props => {
        if (props.valid === false) return `
        color: ${color.red};
        `
    }};
`;

export const StyledDialog = styled.div`
    position:fixed;
    left: 0;
    right: 0;
    bottom: ${rem(48)};
    text-align: center;
    p {
        display:inline-block;
        padding: ${rem(12)} ${rem(32)};
        width:auto;
        border-radius: ${rem(12)};
        background-color: ${color.red};
        line-height: ${rem(20)};
        white-space: pre-line;
        font-size: ${rem(14)};
        text-align:center;
        color: white;
    }
`;
