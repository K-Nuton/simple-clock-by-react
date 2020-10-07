import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Shape, Theme } from '../Enums';
import { ThemeContext } from '../ThemeContext';
import './Dial.css'

const decide_scaling = (): string => 
    window.innerWidth < window.innerHeight ? "width-scaling" : "height-scaling";
    
type scalingState = [string, React.Dispatch<React.SetStateAction<string>>];
type DialProps = {
  children?: JSX.Element[];
  shape: Shape;
};
const Dial: React.FC<DialProps> = ({ children, shape }): JSX.Element => {
  const theme: Theme = useContext(ThemeContext) as Theme;

  const [scaling, setScale]: scalingState = useState(decide_scaling());

  const resize = (): void => setScale(decide_scaling());

  useEffect(() => {
    window.addEventListener("resize", resize);

    return (): void => window.removeEventListener("resize", resize);
  });

  return (
    <div className={`dial ${scaling} ${shape} ${theme}`} >
      {children}
    </div>
  );
};

export default Dial;