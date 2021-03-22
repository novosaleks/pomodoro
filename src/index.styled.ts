import { createGlobalStyle } from 'styled-components';

const CommonStyles = createGlobalStyle`
  body {
    background-color: #1e213f;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1;
    color: #fff;
  }
`;

export default CommonStyles;