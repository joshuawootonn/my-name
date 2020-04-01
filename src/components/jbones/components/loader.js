import React from 'react';
import * as PIXI from 'pixi.js';
import { Text } from '@inlet/react-pixi';

const Loader = () => {
    return (
        <Text
            text={'Loading...'}
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
    );
};

export default Loader;
