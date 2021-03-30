import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

const Button = styled.button<LayoutProps>`
  min-height: 3rem;
  border-radius: 27px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};

  ${layout}
`;

export default Button;