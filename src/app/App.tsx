import React from 'react';

import { Container } from './App.styled';
import Timer from '../components/Timer';

const App: React.FC = () => {
    return (
        <Container width={1 / 2}>
            <Timer/>
        </Container>
    );
};

export default App;