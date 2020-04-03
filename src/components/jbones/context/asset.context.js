import React, { createContext, useContext, useEffect, useState } from 'react';
import * as pixi from 'pixi.js';

const defaultAssetContextState = [true, null];
const AssetContext = createContext(defaultAssetContextState);

export const useAssets = () => useContext(AssetContext);

export const AssetProvider = props => {
    const [assetState, setAssetState] = useState(defaultAssetContextState);

    useEffect(() => {
        const loader = new pixi.Loader();
        loader.add('map', 'http://localhost:8080/assets/tilemaps/map.json');
        loader.add(
            'tileset',
            'https://cdn.glitch.com/bf08baaa-913a-4fd3-af23-ba148998403d%2Fnature-paltformer-tileset-16x16.png?v=1562185449857'
        );
        loader.add(
            'character',
            'https://cdn.glitch.com/bf08baaa-913a-4fd3-af23-ba148998403d%2Fcharacter.png?v=1562187920811'
        );
        loader.load((loader, resources) => {

            console.log([false, resources]);
            setAssetState([false, resources]);
        });
    }, []);

    return (
        <AssetContext.Provider value={assetState}>
            {props.children}
        </AssetContext.Provider>
    );
};
