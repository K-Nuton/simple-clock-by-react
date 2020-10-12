import React, { useContext } from "react";
import { HandType } from '../../Enums';
import getDegreeFromDate, { TimeContext } from '../TimeUtil';
import './Hands.scss';

type HandProp = {
  handType: HandType;
};
const Hand: React.FC<HandProp> = ({ handType }): JSX.Element => {
  const degree = getDegreeFromDate(
    useContext(TimeContext),
    handType
  );

  return (
    <div className={`hand ${handType}`} style={{transform: `rotate(${degree}deg)`}}>
      <div />
    </div>
  );
};

const Hands: React.FC = (): JSX.Element => (
  <div className={`dial-overLay shadow`}>
    <Hand handType={HandType.HOURS} />
    <Hand handType={HandType.MINUTES} />
    <Hand handType={HandType.SECONDS} />
    <div className={`center`} />
  </div>
);

export default Hands;