import styled from 'styled-components'
import { rem } from './common/mixin';

export const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin: 0px;
`;

export const IconBig = styled.img`
    width: 100px;
    height: 100px;
    margin: 0px;
`;

export const IconSmall = styled.img`
    width: 30px;
    height: 30px;
    margin: 0px;
`;

export const IconCategory = styled.svg`
    width: ${rem(44)};
    height: ${rem(44)};
    max-width:100%;
    max-height:100%;
    margin: 0px;
`;
