import React from 'react';
import { Action, CircularWrapper, Content, Inner, Outer, RemainTime } from './ClockFace.styled';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { withTimer } from '../../common/hocs';

import 'react-circular-progressbar/dist/styles.css';

interface TimerProps {
    time: string,
    timePart: number,
    pauseHandler: () => void,
    actionContent: string,
}

const ClockFace: React.FC<TimerProps> = ({ time, timePart, pauseHandler, actionContent }) => {
    return (
        <Outer width={410} height={410}>
            <Inner>
                <CircularWrapper>
                    <CircularProgressbar strokeWidth={4} styles={buildStyles({
                        trailColor: 'none',
                        pathColor: '#f87070',
                    })} value={timePart}/>
                </CircularWrapper>
                <Content>
                    <RemainTime>{time}</RemainTime>
                    <Action onClick={pauseHandler}>{actionContent}</Action>
                </Content>
            </Inner>
        </Outer>
    );
};

export default withTimer()(ClockFace);