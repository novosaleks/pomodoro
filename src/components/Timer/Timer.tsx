import React from 'react';

import { Outer, Inner, CircularWrapper, Content, RemainTime, Action } from './Timer.styled';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';


const Timer: React.FC = () => {
    return (
        <Outer width={410} height={410}>
            <Inner>
                <CircularWrapper>
                    <CircularProgressbar value={40}/>
                </CircularWrapper>
                <Content>
                    <RemainTime>10:00</RemainTime>
                    <Action>PAUSE</Action>
                </Content>
            </Inner>
        </Outer>
    );
};

export default Timer;