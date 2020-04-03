import { useAssets } from './context/asset.context';
import { Container, Stage, Text } from '@inlet/react-pixi';
import React from 'react';
import Loader from './components/loader';
import Sky from './components/sky';
const App = () => {
    const [isLoading, assets] = useAssets();

    console.log(isLoading);
    return (
        <Stage
            options={{
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 0xffffff,
                resizeTo: window,
            }}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Sky assets={assets} />
                </>
            )}
        </Stage>
    );
};

export default App;
