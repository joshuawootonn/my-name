import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Josher from './components/josher';
import Navigation from './components/navigation';
import Jbones from './components/jbones';
import Brand from './components/brand';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    margin: 0;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export type AppState = 'josher' | 'jbones';

const App: React.FC = () => {
    const [currentAppState, setCurrentAppState] = useState<AppState>('jbones');

    console.log(currentAppState);
    return (
        <Container>
            <Navigation
                currentAppState={currentAppState}
                setCurrentAppState={setCurrentAppState}
            />
            {currentAppState === 'josher' && <Josher />}
            {currentAppState === 'jbones' && <Jbones />}
            <Brand />
        </Container>
    );
};

export default App;
