import React from 'react';
import { AssetProvider } from './context/asset.context';
import App from './app';

const Index = props => {
    return (
        <AssetProvider>
            <App />
        </AssetProvider>
    );
};

export default Index;
