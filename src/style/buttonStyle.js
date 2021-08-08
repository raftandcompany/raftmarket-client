import styled from "styled-components";

export const Button = styled.button`
  padding: 4em;
  background: gray;
  display: ${props => props.visible === false ? "none" : "inline" };
`;

export const Button2 = styled.button`
  padding: 5em;
  background: gray;
  display: ${props => props.visible === false ? "none" : "inline" };
`;