import { useAssets } from './context/asset.context';
import { Stage } from '@inlet/react-pixi';
import React from 'react';
import Loader from './components/loader';
import Layer from './components/layer';

const App = () => {
    const [isLoading, { textures, map }] = useAssets();

    console.log(map);
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
                    {map.layers.map((layer, i) => (
                        <Layer key={i} layer={layer} textures={textures} />
                    ))}
                </>
            )}
        </Stage>
    );
};

export default App;
