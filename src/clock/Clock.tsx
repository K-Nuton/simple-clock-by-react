import React from "react";

import { Theme, Shape } from './Enums';
import Hands from './hands/Hands';
import Marks from './marks/Marks';
import Dial from './dials/Dial';

import './Clock.scss';
import './themes/neumorphism.scss';
import './themes/default.scss';
import './themes/dotted.scss';

type ClockProp = {
  time: Date;
  theme: Theme;
  shape: Shape;
};
const Clock: React.FC<ClockProp> = ({ theme, shape, time }): JSX.Element => {
  return (
    <div className={`clock-wrapper ${theme}`}>
      <Dial shape={shape} >
        <Hands time={time} />
        <Marks />
      </Dial>
    </div>
  );
};

export default Clock;