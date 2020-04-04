import React from 'react';
import { AssetProvider } from './context/asset.context';
import App from './app';
import * as PIXI from 'pixi.js';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const Index = () => {
    return (
        <AssetProvider>
            <App />
        </AssetProvider>
    );
};

export default Index;
