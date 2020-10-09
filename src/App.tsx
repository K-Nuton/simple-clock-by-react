import React, { useEffect } from 'react';
import { useReducer, useState } from 'react';

import Clock from './clock/Clock';
import Selector from './clock/selectors/Selector';

import { Shape, Theme } from './clock/Enums';
import { ButtonProp } from './clock/selectors/Selector';

import './App.scss';

type ThemesStateType = {
  [key in Theme]: boolean;
};
const themeReducer = (state: ThemesStateType, innerText: Theme): ThemesStateType => {
  Object.keys(state).forEach(
    (key: string) => state[key as Theme] = key === innerText
  );
  
  return { ...state };
};

type ShapeStateType = {
  [key in Shape]: boolean;
};
const shapeReducer = (state: ShapeStateType, innerText: Shape): ShapeStateType => {
  Object.keys(state).forEach(
    (key: string) => state[key as Shape] = key === innerText
  );

  return { ...state };
};

type stateType = [string, React.Dispatch<React.SetStateAction<string>>];
const App: React.FC = (): JSX.Element => {
  const [theme, setTheme]: stateType = useState<string>(Theme.DEFAULT);
  const [shape, setShape]: stateType = useState<string>(Shape.CIRCLE);

  const themeSelectInitialState: ThemesStateType = {
    [Theme.DEFAULT]: true,
    [Theme.DOTTED]: false,
    [Theme.NEU_MORPHISM]: false
  };
  const [themeSelectState, changeThemeSelection] = useReducer(themeReducer, themeSelectInitialState);

  const shapeSlectInitialState: ShapeStateType = {
    [Shape.CIRCLE]: true,
    [Shape.SQUARE]: false
  };
  const [shapeSelectState, changeShapeSelection] = useReducer(shapeReducer, shapeSlectInitialState);

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