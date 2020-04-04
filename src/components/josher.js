import React, { useEffect } from 'react';

const Josher = () => {
    const canvasRef = React.useRef(null);

    const moveTheLad2 = (mousePositionX, mousePositionY) => {
        const context = canvasRef.current.getContext('2d');

        const pageWidth = window.innerWidth;
        const pageHeight = window.innerHeight;
        const centerWidth = 0.5 * pageWidth;
        const centerHeight = 0.5 * pageHeight;

        context.canvas.width = pageWidth;
        context.canvas.height = pageHeight;

        context.font = '140px Times New Roman';
        context.textBaseline = 'middle';
        context.textAlign = 'center';

        context.translate(centerWidth, centerHeight);
        context.rotate(
            Math.atan2(
                centerHeight - mousePositionY,
                centerWidth - mousePositionX
            ) +
                Math.PI / 2
        );
        context.translate(-centerWidth, -centerHeight);
        context.fillText('Josher', centerWidth, centerHeight);
    };

    const moveTheLad = e => moveTheLad2(e.clientX, e.clientY);
    useEffect(() => moveTheLad2(window.innerWidth / 2, window.innerHeight), []);

    useEffect(() => {
        document.addEventListener('mousemove', moveTheLad);
        return () => {
            document.removeEventListener('mousemove', moveTheLad);
        };
    }, []);
    return <canvas ref={canvasRef} />;
};

export default Josher;
