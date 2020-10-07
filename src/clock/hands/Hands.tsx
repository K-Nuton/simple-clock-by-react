import React, { useContext, useEffect, useReducer } from "react";
import { HandType } from '../Enums';
import { getDegreeFromDate } from '../TimeUtil';
import { ThemeContext } from '../ThemeContext';
import './Hands.css';
import './Hands.css';

type HandProp = {
  handType: string;
  degree: number;
  theme: string;
};
const Hand: React.FC<HandProp> = ({ handType, degree, theme }): JSX.Element => (
  <div className={`hand ${handType} ${theme}`}
    style={{ transform: `rotate(${degree}deg)` }}>
    <div></div>
  </div>
);

type CenterProp = {
  theme: string;
};
const Center: React.FC<CenterProp> = ({ theme }): JSX.Element => (
  <div className={`center ${theme}`}></div>
);

type HandsState = {
  hours: number,
  minutes: number,
  seconds: number
};
const updateHands = (): HandsState => {
  const date: Date = new Date();
  return {
    hours: getDegreeFromDate(date, HandType.HOURS),
    minutes: getDegreeFromDate(date, HandType.MINUTES),
    seconds: getDegreeFromDate(date, HandType.SECONDS)
  };
};

type HandsProps = {
};
const Hands: React.FC<HandsProps> = (): JSX.Element => {
  const date: Date = new Date();
  const theme: string = useContext(ThemeContext);

  type handReducerType = [HandsState, React.DispatchWithoutAction];
  const [degree, dispatch]: handReducerType = useReducer(updateHands, {
    hours: getDegreeFromDate(date, HandType.HOURS),
    minutes: getDegreeFromDate(date, HandType.MINUTES),
    seconds: getDegreeFromDate(date, HandType.SECONDS)
  });

  useEffect(() => {
    const id: NodeJS.Timeout = setInterval(
      (): void => dispatch(), 500
    );
    return (): void => clearInterval(id);
  });

  return (
    <div className={`dial-overLay shadow ${theme}`}>
      <Hand handType="h" degree={degree.hours} theme={theme} />
      <Hand handType="m" degree={degree.minutes} theme={theme} />
      <Hand handType="s" degree={degree.seconds} theme={theme} />
      <Center theme={theme} />
    </div>
  );
};

export default Hands;