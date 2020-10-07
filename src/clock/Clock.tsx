import React, { useReducer, useState } from "react";
import { Theme, Shape } from './Enums';
import { ThemeContext } from './ThemeContext';
import Hands from './hands/Hands';
import Marks from './marks/Marks';
import Dial from './dials/Dial';
import Selector, { ButtonProp } from './selectors/Selector';
import './Clock.css';
import './themes/neumorphism.css';
import './themes/default.css';
import './themes/dotted.css';

type themeType = {
  [key in Theme]: boolean
};
const themeSelectReducer = (clickState: themeType, themeSelected: Theme): themeType => {
  const result: themeType = { ...clickState };

  for (const themeName of Object.keys(result))
    result[themeName as Theme] = themeName === themeSelected;

  return result;
};

type shapeType = {
  [key in Shape]: boolean
};
const shapeSelectReducer = (clickState: shapeType, shapeSelected: Shape): shapeType => {
  const result: shapeType = { ...clickState };

  for (const shapeName of Object.keys(result))
    result[shapeName as Shape] = shapeName === shapeSelected

  return result;
};

type themeStateType = [string, React.Dispatch<React.SetStateAction<string>>];
type themeDispatchType = [themeType, React.Dispatch<Theme>];

type shapeStateType = [string, React.Dispatch<React.SetStateAction<string>>];
type shapeDispatchType = [shapeType, React.Dispatch<Shape>];

type ClockProp = {
};
const Clock: React.FC<ClockProp> = (): JSX.Element => {
  const [theme, setTheme]: themeStateType = useState(Theme.DEFAULT as string);

  const themeSelectInitialState: themeType = {
    [Theme.DEFAULT]: true,
    [Theme.NEU_MORPHISM]: false,
    [Theme.DOTTED]: false
  };
  const [themeSelect, themeDispatch]: themeDispatchType = 
    useReducer(themeSelectReducer, themeSelectInitialState);

  const [shape, setShape]: shapeStateType = useState(Shape.CIRCLE as string);

  const shapeSelectInitialState: shapeType = {
    [Shape.CIRCLE]: true,
    [Shape.SQUARE]: false
  };
  const [shapeSelect, shapeDispatch]: shapeDispatchType = 
    useReducer(shapeSelectReducer, shapeSelectInitialState);

  return (
    <div className={`overLay ${theme}`} >
      <ThemeContext.Provider value={theme}>
        <Dial shape={shape} >
          <Hands />
          <Marks />
        </Dial>
      </ThemeContext.Provider>
      <div className="button-wrapper">
        <Selector selection={
          Object.values(Theme).map((themeName: Theme): ButtonProp => ({
            innerText: themeName,
            selected: themeSelect[themeName],
            onClick: (): void => {
              setTheme(themeName);
              themeDispatch(themeName);
            }
          }))
        } />
        <Selector selection={
          Object.values(Shape).map((shapeName: Shape): ButtonProp => ({
            innerText: shapeName,
            selected: shapeSelect[shapeName],
            onClick: (): void => {
              setShape(shapeName);
              shapeDispatch(shapeName);
            }
          }))
        } />
      </div>
    </div>
  );
};


export default Clock;