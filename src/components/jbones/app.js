import { useAssets } from './context/asset.context';
import { Stage, Text } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import React from 'react';

const App = () => {
    const [isLoading, assets] = useAssets();

    return (
        <Stage
            options={{ width: window.innerWidth, height: window.innerHeight }}
        >
            <Text
                text={isLoading ? 'Loading...' : 'done'}
                anchor={0.5}
                x={window.innerWidth / 2}
                y={window.innerHeight / 2}
                style={
                    new PIXI.TextStyle({
                        align: 'center',
                        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                        fontSize: 50,
                        fontWeight: 400,
                        fill: ['#ffffff', '#00ff99'], // gradient
                        stroke: '#01d27e',
                        strokeThickness: 5,
                        letterSpacing: 20,
                        dropShadow: true,
                        dropShadowColor: '#ccced2',
                        dropShadowBlur: 4,
                        dropShadowAngle: Math.PI / 6,
                        dropShadowDistance: 6,
                        wordWrap: true,
                        wordWrapWidth: 440,
                    })
                }
            />
        </Stage>
    );
};

export default App;
