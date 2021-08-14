import styled from 'styled-components';
import { color } from './common/variable';
import { rem } from './common/mixin';

export const Title = styled.h1`
    line-height: ${rem(32)};
    font-size: ${rem(24)};
    text-align: center;
    color: ${color.white};
`;

export const TitleLarge = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:0;

    span {
        display: inline-block;
        line-height: ${rem(24)};
        font-size: ${rem(18)};
        color: ${color.white};
        font-weight: 600;
    }
    svg {
        vertical-align:-1px;
    }
`;

export const TextA = styled.h2`
  font-size: 1.0em;
  text-align: left;
  color: blue;
`;

export const TextB = styled.h3`
  font-size: 1.0em;
  text-align: left;
  color: white;
`;

export const TextC = styled.h4`
  font-size: 1.0em;
  text-align: left;
  color: white;
`;
