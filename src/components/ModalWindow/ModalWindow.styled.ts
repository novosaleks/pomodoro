import styled, { css } from 'styled-components';
import {
    color,
    BackgroundColorProps,
    fontFamily,
    FontFamilyProps,
    flexbox, FlexboxProps, width, WidthProps
} from 'styled-system';
import { Button } from '../../common/styledComponents';

const TopIndent = css`
  margin-top: 2rem;
`;

const FlexSettings = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 1400px;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9;
`;

export const Modal = styled.div<WidthProps>`
  ${width};
  position: absolute;
  left: 50%;
  top: 15rem;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 25px;
  color: #161932;
  padding: 1.5rem 0 4rem;
`;

export const Header = styled.header`
  ${FlexSettings};
`;

export const DivLine = styled.hr`
  ${TopIndent};
  border-top: 1px solid #e3e1e1;
`;

export const Subtitle = styled.h3`
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const MainContent = styled.main`
  ${TopIndent};
`;

const UserSelection = styled.section<FlexboxProps>`
  ${FlexSettings};
  ${TopIndent};
  ${flexbox};
  gap: 10px;
`;

export const TimeSelection = styled(UserSelection)<FlexboxProps>`
  ${flexbox};
`;

export const FontSelection = styled(UserSelection)``;

export const PrimaryColorSelection = styled(UserSelection)``;

export const OptionWrapper = styled.div`
  ${FlexSettings};
  gap: 1rem;
`;

const RoundOption = styled.button<{ active: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;

export const FontOption = styled(RoundOption)<FontFamilyProps>`
  ${FlexSettings};
  background-color: ${props => props.active ? '#161932' : '#e3e1e1'};
  color: ${props => props.active ? '#fff' : ''};
  justify-content: center;
  ${fontFamily}
`;

export const PrimaryColorOption = styled(RoundOption)<BackgroundColorProps>`
  ${color};
  position: relative;

  &:before {
    content: '✔';
    display: ${props => props.active ? '' : 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ApplyingChanges = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  color: #fff;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;