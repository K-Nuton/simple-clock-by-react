import React from 'react';
import { useEffect, useState } from 'react';

import Clock from './clock/Clock';
import Selector, { useSelection } from './selector/Selector';

import { Shape, Theme } from './clock/Enums';
import { ButtonProp } from './selector/Selector';

import './App.scss';

const App: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(Theme.DEFAULT);
  const [shape, setShape] = useState<string>(Shape.CIRCLE);

  const [themeSelectState, changeThemeSelection] = useSelection(Theme, Theme.DEFAULT);
  const [shapeSelectState, changeShapeSelection] = useSelection(Shape, Shape.CIRCLE);

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
             theme={theme as Theme}
             shape={shape as Shape} 
             size={size} />
      <div className="selector-wrapper">
        <Selector selection={
          Object.values(Theme).map((themeName: Theme): ButtonProp => ({
            innerText: themeName,
            selected: themeSelectState[themeName],
            onClick: (): void => {
              setTheme(themeName);
              changeThemeSelection(themeName);
            }
          }))
        } />
        <Selector selection={
          Object.values(Shape).map((shapeName: Shape): ButtonProp => ({
            innerText: shapeName,
            selected: shapeSelectState[shapeName],
            onClick: (): void => {
              setShape(shapeName);
              changeShapeSelection(shapeName);
            }
          }))
        } />
      </div>
    </div>
  )
};

export default App;