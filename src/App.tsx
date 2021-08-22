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
  useEffect(() => {
    const intervalid = setInterval(() => setTime(new Date()), 200);
    return () => clearInterval(intervalid);
  });

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
        <Selector selectItems={Theme}
                  selectTarget={theme}
                  onClickItem={setTheme} />
        <Selector selectItems={Shape}
                  selectTarget={shape}
                  onClickItem={setShape} />
      </div>
    </div>
  )
};

export default App;