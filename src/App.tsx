import React from 'react';
import { useEffect, useState } from 'react';

import Clock from './clock/Clock';
import Selector from './selector/Selector';

import { Shape, Theme } from './Enums';

import './App.scss';

const App: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState(Theme.DEFAULT);
  const [shape, setShape] = useState(Shape.CIRCLE);

  const [time, setTime] = useState(new Date());
  useEffect(
    () => {
      const intervalid = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(intervalid);
    }
  );

  const size: number = (
    window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight
  ) * 0.7;

  return (
    <div className={`${theme} overLay`}>
      <Clock time={time}
             theme={theme}
             shape={shape} 
             size={size} />
      <div className="selector-wrapper">
        <Selector selection={Theme}
                  selectTarget={theme}
                  onClick={(selection) => setTheme(selection)} />
        <Selector selection={Shape}
                  selectTarget={shape}
                  onClick={(selection) => setShape(selection)} />
      </div>
    </div>
  )
};

export default App;