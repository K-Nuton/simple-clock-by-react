import React, { useEffect, useState } from 'react';
import { Shape } from '../Enums';
import './Dial.scss'

const decide_scaling = (): string => 
    window.innerWidth < window.innerHeight ? "width-scaling" : "height-scaling";
    
type scalingState = [string, React.Dispatch<React.SetStateAction<string>>];
type DialProps = {
  children?: JSX.Element[];
  shape: Shape;
};
const Dial: React.FC<DialProps> = ({ children, shape }): JSX.Element => {

  const [scaling, setScale]: scalingState = useState(decide_scaling());

  const resize = (): void => setScale(decide_scaling());

  useEffect(() => {
    window.addEventListener("resize", resize);

    return (): void => window.removeEventListener("resize", resize);
  });

  return (
    <div className={`dial ${scaling} ${shape}`} >
      {children}
    </div>
  );
};

export default Dial;