import styled from 'styled-components';
import { layout } from 'styled-system';

const Button = styled.button<any>`
  min-height: 3rem;
  border-radius: 27px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 1px solid rgba(47, 47, 47, 0.4);
  }

  ${layout}
`;

export default Button;