import React, { useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Dial.css'

type DialProps = {
  children?: JSX.Element[];
  shape: string;
};
const Dial: React.FC<DialProps> = ({ children, shape }) => {
  const theme = useContext(ThemeContext);

  const [W, H] = [window.innerWidth, window.innerHeight];
  const decide_scaling = useCallback(
    (): string => W < H ? "width-scaling" : "height-scaling", 
    [W, H]
  );

  const [scaling, setScale] = useState(decide_scaling());
  const resize = ():void => setScale(decide_scaling());


  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  });

  return (
    <div className={`dial ${scaling} ${shape} ${theme}`} >
      {children}
    </div>
  );
};

export default Dial;