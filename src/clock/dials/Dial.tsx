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

  const decide_scaling = (): string => window.innerWidth < window.innerHeight ? "width-scaling" : "height-scaling";

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