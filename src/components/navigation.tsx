import React from 'react';
import styled from 'styled-components';
import { AppState } from '../app';

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

const Navigation: React.FC<NavigationProps> = props => {
    console.log(props);
    return (
        <Wrapper>
            <Button
                active={'josher' === props.currentAppState}
                onClick={() => props.setCurrentAppState('josher')}
            >
                11/5 Josher
            </Button>
            <Button
                active={'josher2' === props.currentAppState}
                onClick={() => props.setCurrentAppState('josher2')}
            >
                11/6 Josher2
            </Button>
        </Wrapper>
    );
};

export default Navigation;
