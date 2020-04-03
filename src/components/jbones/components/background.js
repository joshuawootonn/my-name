import React, { FC } from 'react';
import * as PIXI from 'pixi.js';
import { Container, Sprite } from '@inlet/react-pixi';

const Background = ({ assets }) => {
    const tileTextures = [];

    const tileSize = 16;

    for (let i = 0; i < 7 * 11; i++) {
        const x = i % 7;
        const y = Math.floor(i / 7);
        tileTextures[i] = new PIXI.Texture(
            assets.tileset.texture,
            new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
        );
    }

    const map = assets.map.data;

    console.log(map);

    const sprites = [];

    for (let y = 0; y < map.width; y++) {
        for (let x = 0; x < map.width; x++) {
            const pos = y * map.width + x;
            if (map.background[pos] != 12) {
                sprites.push({
                    texture: tileTextures[map.background[pos]],
                    x: x * tileSize,
                    y: y * tileSize,
                });
            }
        }
    }
    return (
        <Container scale={{ x: 3, y: 3 }}>
            {sprites.map(sprite => (
                <Sprite
                    key={sprite.x * sprite.y * Math.random()}
                    texture={sprite.texture}
                    x={sprite.x}
                    y={sprite.y}
                />
            ))}
        </Container>
    );
};

export default Background;
