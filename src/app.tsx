import React, { useEffect } from 'react';
import styled from 'styled-components';

import useInterval from './hooks/useInterval';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
const Canvas = styled.canvas``;

const App: React.FC = () => {
  const canvasRef = React.useRef(null);

  const moveTheLad = (e: MouseEvent) => {
    if (canvasRef && canvasRef.current) {
      // @ts-ignore
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      context.canvas.width = window.innerWidth;
      context.canvas.height = window.innerHeight;
      context.font = '140px Times New Roman';
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      console.log(e.clientX, e.clientY);
      context.rotate(.2 );
      // context.transform(1, 0.5, -0.5, 1, 30, 10);
      context.fillText('Josher', 200, 150);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveTheLad);
    return () => {
      document.removeEventListener('mousemove', moveTheLad);
    };
  }, []);
  return (
    <Container>
      <Canvas ref={canvasRef} />
    </Container>
  );
};

export default App;
