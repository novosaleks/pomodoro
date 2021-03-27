import styled from 'styled-components';
import { layout } from 'styled-system';

export const Outer = styled.div<any>`
  padding: 1.4rem;
  margin: 5rem auto 0;
  border-radius: 50%;
  background: linear-gradient(315deg, #2E325A 0%, #0E112A 100%);
  box-shadow: -50px -50px 100px #272C5A, 50px 50px 100px #121530;
  ${layout}
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #161932;
`;

export const CircularWrapper = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Content = styled(CircularWrapper)`
  text-align: center;
  z-index: 2;
`

export const RemainTime = styled.h2`
  font-size: 6.3rem;
  font-weight: 700;
`

export const Action = styled.h2`
  cursor: pointer;
  margin-top: 2rem;
  font-size: 1rem;
  letter-spacing: 15px;
  
  &:hover {
    color: #f87070;
  }
`