import React, { createContext, useContext, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';

const map = require('../assets/tilemaps/map.json');
const water = require('../assets/images/water.png');
const sky = require('../assets/images/sky.png');
const main = require('../assets/images/main.png');
const rocks = require('../assets/images/rocks.png');
const plants = require('../assets/images/plants.png');

const defaultAssetContextState = [true, {}];
const AssetContext = createContext(defaultAssetContextState);

export const useAssets = () => useContext(AssetContext);

const tileSize = 16;

function getTexturesFromImage(image) {
    const { width, height } = image.texture;
    const textures = [];
    const tileHeight = height / tileSize;
    const tileWidth = width / tileSize;
    for (let i = 0; i < tileHeight * tileWidth; i++) {
        const x = i % tileWidth;
        const y = Math.floor(i / tileWidth);
        textures[i] = new PIXI.Texture(
            image.texture,
            new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
        );
    }
    return textures;
}

export const AssetProvider = props => {
    const [assetState, setAssetState] = useState(defaultAssetContextState);

    useEffect(() => {
        const loader = new PIXI.Loader();
        loader.add('sky', sky);
        loader.add('main', main);
        loader.add('rocks', rocks);
        loader.add('plants', plants);
        loader.add('water', water);
        loader.load(async (loader, { sky, main, rocks, plants, water }) => {
            const skyTextures = getTexturesFromImage(sky);
            const mainTextures = getTexturesFromImage(main);
            const rocksTextures = getTexturesFromImage(rocks);
            const plantTextures = getTexturesFromImage(plants);
            const waterTextures = getTexturesFromImage(water);

            const textures = [
                0,
                ...mainTextures,
                ...plantTextures,
                ...rocksTextures,
                ...skyTextures,
                ...waterTextures,
            ];
            console.log(map);
            setAssetState([false, { textures, map }]);
        });
    }, []);

    return (
        <AssetContext.Provider value={assetState}>
            {props.children}
        </AssetContext.Provider>
    );
};
