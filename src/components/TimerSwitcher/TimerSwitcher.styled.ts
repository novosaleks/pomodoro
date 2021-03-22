import styled from 'styled-components';
import { Button } from '../../common/styledComponents';

export const Switcher = styled.div`
  background-color: #161932;
  border-radius: 5rem;
  display: inline-block;
  padding: .5rem;
`;

export const SwitcherItem = styled(Button)`
  background-color: ${props => !props.active ? 'transparent' : '#f87070'};
  color: ${props => !props.active ? '#d7e0ff' : '#1e213f'};
`;