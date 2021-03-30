import React from 'react';
import { Action, CircularWrapper, Content, Inner, Outer, RemainTime } from './ClockFace.styled';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { withTimer } from '../../common/hocs';

import 'react-circular-progressbar/dist/styles.css';
import { withTheme } from 'styled-components';
import { theme } from 'themes';

interface TimerProps {
    time: string,
    timePart: number,
    pauseHandler: () => void,
    actionContent: string,
    theme: theme;
}

const ClockFace: React.FC<TimerProps> = ({ time, timePart, pauseHandler, actionContent, theme}) => {
    return (
        <Outer width={[250, 270, 370, 450]} height={[250, 270, 370, 450]}>
            <Inner>
                <CircularWrapper>
                    <CircularProgressbar strokeWidth={4} styles={buildStyles({
                        trailColor: 'none',
                        pathColor: theme.primaryColor,
                    })} value={timePart}/>
                </CircularWrapper>
                <Content>
                    <RemainTime fontSize={['5.2rem', '5.4rem', '5.4rem', '5.4rem']}>{time}</RemainTime>
                    <Action onClick={pauseHandler}>{actionContent}</Action>
                </Content>
            </Inner>
        </Outer>
    );
};

export default withTimer()(withTheme(ClockFace));