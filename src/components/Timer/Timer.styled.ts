import styled from 'styled-components';
import { layout } from 'styled-system';

export const Title = styled.h1`
  padding-top: 2rem;
  text-align: center;
  color: #fff;
`;

export const SwitchWrapper = styled.div<any>`
  text-align: center;
  margin-top: 5rem
`;

export const Container = styled.div<any>`
  margin: 0 auto;
  padding: 0 1.5rem;
  ${layout}
`;

export const SettingsButton = styled.button`
  background: none;
  border: none;
  display: block;
  margin: 5rem auto 0;
  cursor: pointer;
`