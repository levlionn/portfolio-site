import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = new p5(sketch, canvasRef.current);

      return () => {
        canvas.remove();
      };
    }
  }, [sketch, canvasRef]);

  return <div ref={canvasRef} id="p5-canvas" className="w-full h-full"></div>;
};

export default P5Wrapper;
