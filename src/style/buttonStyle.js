import styled from "styled-components";

export const Button = styled.button`
  padding: 2em;
  background: gray;
  display: ${props => props.visible === false ? "none" : "inline" };
`;


