import React from 'react';

import Header from '../components/Header';
import { Container } from './App.styled';
import Timer from '../components/Timer';

const App: React.FC = () => {
    return (
        <Container width={1 / 2}>
            <Header/>
            <Timer/>
        </Container>
    );
};

export default App;