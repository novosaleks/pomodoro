import styled from 'styled-components';
import { layout, flexbox, LayoutProps, FlexboxProps } from 'styled-system';

interface UnitProps extends LayoutProps, FlexboxProps {
}

export const Unit = styled.label<UnitProps>`
  ${layout};
  ${flexbox};
`;

export const Input = styled.input<any>`
  ${layout};
  
  background: #EFF1FA;
  border-radius: 10px;
  border: none;
  min-height: 2.3rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputLabel = styled.span<LayoutProps>`
  ${layout};
  
  display: block;
  font-weight: 700;
  font-size: 0.8rem;
  color: #858585;
`;