import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9;
`

export const Modal = styled.div`
  width: 540px;
  min-height: 464px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 25px;
  color: #161932;
`;

export const ModalContent = styled.div`
    padding: 2.5rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`