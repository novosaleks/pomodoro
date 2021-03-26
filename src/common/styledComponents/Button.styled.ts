import styled from 'styled-components';
import { layout } from 'styled-system';

const Button = styled.button<any>`
  min-height: 3rem;
  border-radius: 27px;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    outline: #888 2px solid;
  }

  ${layout}
`;

export default Button;