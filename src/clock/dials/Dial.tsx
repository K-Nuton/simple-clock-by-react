import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Dial.css'

type DialProps = {
  children?: JSX.Element[];
  shape: string;
};
const Dial: React.FC<DialProps> = ({ children, shape }) => {
  const theme: string = useContext(ThemeContext);

  const decide_scaling = (): string => 
    window.innerWidth < window.innerHeight ? "width-scaling" : "height-scaling";

  type scalingState = [string, React.Dispatch<React.SetStateAction<string>>];
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