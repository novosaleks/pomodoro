import styled from 'styled-components';
import { Button } from '../../common/styledComponents';

export const Switcher = styled.div`
  background-color: #161932;
  border-radius: 5rem;
  display: inline-block;
  padding: .5rem;
`;

export const SwitcherItem = styled(Button)<{active: boolean}>`
  font-weight: 700;
  background-color: ${props => !props.active ? 'transparent' : ''};
  color: ${props => !props.active ? '#8c8c8c' : '#1e213f'};
  &:hover {
    color: ${props => !props.active ? '#d7e0ff' : ''};
  }
`;