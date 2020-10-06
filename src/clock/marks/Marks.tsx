import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../dials/Dial.css';
import './Marks.css';

type MarkProp = {
  degree: number;
  theme: string;
};
const Mark: React.FC<MarkProp> = ({ degree, theme }) => (
  <div className={`mark ${theme}`} style={{ transform: `rotate(${degree}deg)` }}>
    <div></div>
  </div>
);

type MarksProp = {
};
const Marks: React.FC<MarksProp> = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`dial-overLay ${theme}`}>
      {[...Array(12)]
        .map((_, index) => 30 * index)
        .map((degree) => <Mark key={degree.toString()} degree={degree} theme={theme} />)}
    </div>
  );
};

export default Marks;