import React from 'react';

import { Overlay, Modal, Header, ModalContent } from './ModalWindow.styled';

import cross from '../../assets/icon-close.svg';

const ModalWindow: React.FC = () => {
    return (
        <Overlay>
            <Modal>
                <ModalContent>
                    <Header>
                        <h2>Settings</h2>
                        <img src={cross} alt="close"/>
                    </Header>
                </ModalContent>
            </Modal>
        </Overlay>
    );
};

export default ModalWindow;