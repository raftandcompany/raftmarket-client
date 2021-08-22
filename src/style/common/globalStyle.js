import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
      min-width:280px;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background-color:#191A1F;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  // @media screen and (min-width:720px) and (min-height:1280px){html{font-size:32px}}@media screen and (min-width:768px) and (max-width:1024px){html{font-size:22px}}@media screen and (orientation:landscape) and (min-width:480px) and (max-width:1024px) and (max-height:767px){html{font-size:12px}}@media screen and (orientation:landscape) and (min-width:1024px) and (max-width:1280px) and (min-height:768px){html{font-size:22px}}@media screen and (orientation:landscape) and (min-width:1280px) and (max-width:1440px) and (min-height:1024px){html{font-size:22px}}


  html, body, #root {
      width:100%;
  }
`;
