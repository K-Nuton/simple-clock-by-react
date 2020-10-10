import React from "react";
import { HandType } from '../../Enums';
import getDegreeFromDate from '../TimeUtil';
import './Hands.scss';

type HandProp = {
  handType: HandType;
  degree: number;
};
const Hand: React.FC<HandProp> = ({ handType, degree }): JSX.Element => (
  <div className={`hand ${handType}`}
    style={{ transform: `rotate(${degree}deg)` }}>
    <div></div>
  </div>
);

const Center: React.FC = (): JSX.Element => (
  <div className={`center`}></div>
);

type HandsProps = {
  time: Date;
};
const Hands: React.FC<HandsProps> = ({ time }): JSX.Element => {
  const [degreeOfHours, degreeOfMinutes, degreeOfSeconds] =
    Object.values(HandType).map((type: HandType) => getDegreeFromDate(time, type));

  return (
    <div className={`dial-overLay shadow`}>
      <Hand handType={HandType.HOURS} degree={degreeOfHours} />
      <Hand handType={HandType.MINUTES} degree={degreeOfMinutes} />
      <Hand handType={HandType.SECONDS} degree={degreeOfSeconds} />
      <Center />
    </div>
  );
};

export default Hands;