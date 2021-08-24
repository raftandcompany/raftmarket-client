import styled, { css } from 'styled-components';
import { color } from 'style/common/variable';
import { rem, radiusBox, ellipsis } from 'style/common/mixin';

export const setSize = size => {
    switch (size) {
        case 'small' :
            return `float:left;
            width: calc((100% - ${rem(24)}) / 3);
            &:nth-child(3n),
            &:nth-child(3n-1) {
                margin-left:${rem(12)};
            }
            &:nth-child(3n-2) {
                clear:both;
            }
            div:first-child {
                padding-top: 100%;
            }`;
        case 'medium' :
            return `float:left;
            margin-left:${rem(16)};
            width:${rem(150)};
            &:first-child {
                margin-left:0;
            }`;
        case 'large' :
            return `float:left;
            width: calc((100% - ${rem(15)}) / 2);
            &:nth-child(2n) {
                margin-left:${rem(15)};
            }
            &:nth-child(2n+1) {
                clear:both;
            }`;
        default :
            return `width:100%;`;
    }
}

export const card = css`
    ${({ size }) => setSize(size)};
    ${props => props.multiple ? `float:left` : null };
    overflow: hidden;
    padding: ${rem(24)} 0;
`;

export const CardRow = styled.div`
    ${card};
`;

export const CardAction = styled.a.attrs(props => ({
    href: props.href
}))`
    display: block;
    width: 100%;
    position: relative;
    .ico-favorite {
        position:absolute;
        right: ${rem(12)};
        top: ${rem(8)};
    }

    .image {
        overflow: hidden;
        position: relative;
        padding-top: 75%;

        border-radius: ${rem(8)};

        .list-scroll & {
            padding-top: 80%;
        }
    }
`;


export const CardContent = styled.div`
    overflow: hidden;
    position: relative;
    .typo-emphasis {
        display: block;
        margin-top: ${rem(13)};
        margin-bottom: ${rem(12)};
        line-height: ${rem(20)};
        font-size: ${rem(16)};
        font-weight: 600;
        color: ${color.white};
        svg {
            margin-right: ${rem(8)};
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body1 {
        ${ellipsis};
        margin-bottom: ${rem(6)};
        line-height: ${rem(14)};
        font-size: ${rem(12)};
        color: ${color.purpleLight};

        & + .typo-body1 {
            margin-top: ${rem(4)};
        }
        &.basket {
            color: ${color.orange};
        }
        &.time {
            color: ${color.pink};
        }
        svg {
            margin-right: ${rem(5)};
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body2 {
        ${ellipsis};
        margin-bottom: ${rem(6)};
        line-height: ${rem(14)};
        font-size: ${rem(13)};
        color: ${color.gray3};
    }
`;

export const CardImage = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt || 'image'
}))`
    position:absolute;
    left:0;
    top:0;
    object-fit: cover;

`;
