import styled from "styled-components";

export const ItemBg = styled.div`
  padding: 4em;
  background: ${props => props.color || "black"};
  width: 100px;
  height: 100px;
`;