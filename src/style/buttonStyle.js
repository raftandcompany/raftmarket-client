import styled from "styled-components";

export const Button = styled.button`
  display: ${props => props.visible === false ? "none" : "inline" };
`;


