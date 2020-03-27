import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Josher from './components/josher';
import Navigation from './components/navigation';
import Josher2 from './components/josher2';
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

export type AppState = 'josher' | 'josher2';

const App: React.FC = () => {
    const [currentAppState, setCurrentAppState] = useState<AppState>('josher');

    console.log(currentAppState);
    return (
        <Container>
            <Navigation
                currentAppState={currentAppState}
                setCurrentAppState={setCurrentAppState}
            />
            {currentAppState === 'josher' && <Josher />}
            {currentAppState === 'josher2' && <Josher2 />}
            <Brand />
        </Container>
    );
};

export default App;
