import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const Jbones = () => {
    const app = useRef(null);
    const skeleboy = useRef(null);
    const canvasRef = useRef(null);

    // useEffect(() => {
    //     canvasRef.current.width = window.innerWidth;
    //     canvasRef.current.style.width = window.innerWidth;
    //     canvasRef.current.height = window.innerHeight;
    //     canvasRef.current.style.height = window.innerHeight;
    // }, [window.innerWidth, window.innerHeight]);

    const moveSkeleboy = e => {
        skeleboy.current.x = e.data.global.x;
        skeleboy.current.y = e.data.global.y;
    };

    useEffect(() => {
        if (canvasRef.current) {
            app.current = new PIXI.Application({
                height: window.innerHeight,
                width: window.innerWidth,
                backgroundColor: 0xffffff,
                view: canvasRef.current,
            });

            skeleboy.current = new PIXI.Sprite.from('back.png');
            skeleboy.current.anchor.set(0.5);
            skeleboy.current.x = app.current.view.width / 2;
            skeleboy.current.y = app.current.view.height / 2;
            skeleboy.current.height = 30;
            skeleboy.current.width = 30;
            app.current.stage.addChild(skeleboy.current);

            // app.current.stage.interactive = true;
            // app.current.stage.on('pointermove', moveSkeleboy);
        }
    }, [canvasRef.current]);

    return <canvas ref={canvasRef} />;
};

export default Jbones;
