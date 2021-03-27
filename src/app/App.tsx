import React from 'react';

import Timer from '../components/Timer';
import { Portal } from '../common/containers';
import ModalWindow from '../components/ModalWindow';

const App: React.FC = () => {
    return (
        <>
            <Timer/>
            <Portal id='modal-root'>
                <ModalWindow/>
            </Portal>
        </>
    );
};

export default App;