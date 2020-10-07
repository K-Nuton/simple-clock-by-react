import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../dials/Dial.css';
import './Marks.css';
import { Theme } from '../Enums';

type MarkProp = {
  degree: number;
  theme: Theme;
};
const Mark: React.FC<MarkProp> = ({ degree, theme }): JSX.Element => (
  <div className={`mark ${theme}`} style={{ transform: `rotate(${degree}deg)` }}>
    <div></div>
  </div>
);

type MarksProp = {
};
const Marks: React.FC<MarksProp> = (): JSX.Element => {
  const theme: Theme = useContext(ThemeContext) as Theme;

  return (
    <div className={`dial-overLay ${theme}`}>
      {[...Array(12)]
        .map((_: null, index: number): number => 30 * index)
        .map((degree: number): JSX.Element => <Mark key={degree.toString()} degree={degree} theme={theme} />)}
    </div>
  );
};

export default Marks;