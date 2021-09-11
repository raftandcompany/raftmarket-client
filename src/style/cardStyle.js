import styled, { css } from 'styled-components';
import { color } from 'style/common/variable';
import { rem, radiusBox, ellipsis, typoBody1, typoBody2 } from 'style/common/mixin';

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
    overflow: hidden;
    padding: 0 0 ${rem(24)};
    .typo-emphasis {
        display: block;
        color: ${color.white};
        svg {
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body1 {
        ${typoBody1};
        ${ellipsis};
        margin-bottom: ${rem(6)};

        & + .typo-body1 {
            margin-top: ${rem(4)};
        }
        &.pre {
            color: ${color.gray3};
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
        ${typoBody2};
        ${ellipsis};
        margin-bottom: ${rem(6)};
        color: ${color.gray3};
        &.status {
            display:flex;
            align-items:center;
            line-height: ${rem(28)};
            font-size: ${rem(16)};
            span {
                margin-right: ${rem(8)};
                svg {
                    vertical-align: ${rem(-3)};
                }
            }
        }
        &.cart {
            color: ${color.purpleLight};
        }
        &.list {
            color: ${color.blueLight};
        }
        &.offer {
            color: ${color.orange};
        }
        &.transfer {
            color: ${color.pink};
        }
    }
`;

export const CardRow = styled.div`
    ${card};
    ${({ size }) => setSize(size)};
    ${props => props.multiple ? `float:left` : null };

    .image {
        margin-bottom: ${rem(12)};
    }
    .typo-emphasis {
        margin-bottom: ${rem(12)};
        line-height: ${rem(20)};
        font-size: ${rem(16)};
        font-weight: 600;
        svg {
            margin-right: ${rem(8)};
        }
    }
    .typo-body1 {
        color: ${color.purpleLight};
    }
`;

export const CardCol = styled.div`
    ${card};
    margin-bottom: ${rem(12)};
    padding: ${rem(12)} ${rem(9)};
    border-radius: ${rem(12)};
    background-color: ${color.blackCard};

    .image {
        float:left;
        margin-top: ${rem(2)};
        margin-right: ${rem(16)};
        width: ${rem(88)};
        padding-top: ${rem(88)} !important;
    }
    .typo-emphasis {
        line-height: ${rem(28)};
        font-size: ${rem(18)};
        font-weight: 500;
        svg {
            margin-right: ${rem(12)};
            transform: scale(1.2);
        }
        .bar {
            margin: 0 ${rem(16)};
            border-left: 1px solid ${color.gray2};
        }
        .unit {
            margin-left: ${rem(8)};
            font-size: ${rem(12)};
            color: ${color.gray3};
        }
    }
    .owner {
        display:flex;
        align-items:center;
        clear: both;
        margin-top: ${rem(22)};
        height: ${rem(20)};
        > * {
            display:flex;
            align-items:center;
        }
        svg {
            margin: 0 ${rem(16)};
        }
    }
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

export const UserImage = styled.span`
    display: inline-block;
    margin-right: ${rem(8)};
    width: ${rem(20)};
    height: ${rem(20)};
    border-radius: 50%;
    background: ${color.gray2} ${props => `url(${props.src}) no-repeat 50%/100% auto`};
`;

export const CategoryBox = styled.div`
    margin: 0 ${rem(-16)};
    padding: ${rem(180)} ${rem(24)} ${rem(40)};
    height: ${rem(328)};
    background: ${props => `url(${props.background}) no-repeat 50%/100% auto`};

    h3 {
        margin-bottom: ${rem(16)};
        text-transform: capitalize;
    }
    a {
        display: none;
    }
    .typo-body2 {
        ${typoBody2};
    }
`;
