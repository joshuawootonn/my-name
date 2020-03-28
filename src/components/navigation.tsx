import React, { useRef } from 'react';
import styled from 'styled-components';
import { AppState } from '../app';
import * as PIXI from 'pixi.js';

const Button = styled.button<{ active: boolean }>`
    background-color: ${props => (props.active ? '#fff' : '#ddd')};
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    top: 16px;
    position: absolute;
    left: 16px;
    button {
        margin-bottom: 16px;
    }
`;

interface NavigationProps {
    currentAppState: AppState;
    setCurrentAppState: (appState: AppState) => void;
}

const Navigation: React.FC<NavigationProps> = props => (
    <Wrapper>
        <Button
            active={'josher' === props.currentAppState}
            onClick={() => props.setCurrentAppState('josher')}
        >
            11/5/19 Josher
        </Button>
        <Button
            active={'jbones' === props.currentAppState}
            onClick={() => props.setCurrentAppState('jbones')}
        >
            3/26/20 Jbones
        </Button>
    </Wrapper>
);

export default Navigation;
