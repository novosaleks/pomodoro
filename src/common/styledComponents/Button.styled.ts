import styled from 'styled-components';
import { layout } from 'styled-system';

const Button = styled.button<any>`
  min-height: 3rem;
  border-radius: 27px;
  border: none;
  cursor: pointer;

  ${layout}
`;

export default Button;