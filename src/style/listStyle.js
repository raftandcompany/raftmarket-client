import styled from "styled-components";

export const ItemBg = styled.div`
  padding: 1em;
  background: ${props => props.color || "black"};
`;