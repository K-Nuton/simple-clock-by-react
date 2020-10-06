import React, { useReducer, useState } from "react";
import { Theme, Shape } from './Enums';
import { ThemeContext } from './ThemeContext';
import Hands from './hands/Hands';
import Marks from './marks/Marks';
import Dial from './dials/Dial';
import Selector from './selectors/Selector';
import './Clock.css';
import './themes/neumorphism.css';
import './themes/default.css';
import './themes/dotted.css';

type themeType = {
  [Theme.DEFAULT]: boolean,
  [Theme.NEW_MORPHISM]: boolean,
  [Theme.DOTTED]: boolean
};
const themeSelectReducer = (clickState: themeType, innerText: Theme): themeType => {
  const result: themeType = {
    [Theme.DEFAULT]: false,
    [Theme.NEW_MORPHISM]: false,
    [Theme.DOTTED]: false
  };
  result[innerText] = true;
  return result;
};

type shapeType = {
  [Shape.CIRCLE]: boolean,
  [Shape.SQUARE]: boolean
};
const shapeSelectReducer = (clickState: shapeType, innerText: Shape): shapeType => {
  const result: shapeType = {
    [Shape.CIRCLE]: false,
    [Shape.SQUARE]: false
  }
  result[innerText] = true;
  return result;
};

type ClockProp = {
};
const Clock: React.FC<ClockProp> = () => {
  const [theme, setTheme] = useState(Theme.DEFAULT);
  const [themeSelect, themeDispatch] = useReducer(themeSelectReducer, {
    [Theme.DEFAULT]: true,
    [Theme.NEW_MORPHISM]: false,
    [Theme.DOTTED]: false
  });

  const [shape, setShape] = useState(Shape.CIRCLE);
  const [shapeSelect, shapeDispatch] = useReducer(shapeSelectReducer, {
    [Shape.CIRCLE]: true,
    [Shape.SQUARE]: false
  });

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
          Object.entries(Theme).map(([_, themeName]) => ({
            innerText: themeName,
            selected: themeSelect[themeName],
            onClick: () => {
              setTheme(themeName);
              themeDispatch(themeName);
            }
          }))
        } />
        <Selector selection={
          Object.entries(Shape).map(([_, shapeName]) => ({
            innerText: shapeName,
            selected: shapeSelect[shapeName],
            onClick: () => {
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