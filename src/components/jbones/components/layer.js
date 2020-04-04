import React from 'react';
import { Container, Sprite } from '@inlet/react-pixi';

const Layer = ({ textures, layer }) => {
    const sprites = [];
    const { height, width } = layer;

    console.log(height, width);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const k = i === 0 ? j : i * width + j;

            if (layer.data[k] > 0 && layer.data[k] <= 10000) {
                sprites.push({
                    texture: textures[layer.data[k]],
                    x: j * 16,
                    y: i * 16,
                });
            }
        }
    }

    return (
        <Container scale={{ x: 2, y: 2 }}>
            {sprites.map((sprite, i) => (
                <Sprite
                    key={i}
                    texture={sprite.texture}
                    x={sprite.x}
                    y={sprite.y}
                />
            ))}
        </Container>
    );
};

export default Layer;
