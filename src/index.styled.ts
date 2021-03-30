import { createGlobalStyle } from 'styled-components';
import { fontSize, FontSizeProps } from 'styled-system';

interface CommonStylesProps extends FontSizeProps {
    'font': string,
}

const CommonStyles = createGlobalStyle<CommonStylesProps>`
  * {
    box-sizing: border-box;
    font-family: ${props => props.font};
  }

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
  }

  .focus {
    outline: none;

    &:focus-visible {
      outline: #888 2px solid;
    }
  }

  &:root {
    ${fontSize}
  }
`;

export default CommonStyles;