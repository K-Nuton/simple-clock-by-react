import React from "react";

import { Theme, Shape } from '../Enums';
import Hands from './hands/Hands';
import Marks from './marks/Marks';
import Dial from './dials/Dial';

import './Clock.scss';
import './themes/neumorphism.scss';
import './themes/default.scss';
import './themes/dotted.scss';
import { TimeContext } from "./TimeUtil";

type ClockProp = {
  time: Date;
  theme: Theme;
  shape: Shape;
  size: number;
};
const Clock: React.FC<ClockProp> = ({ theme, shape, time, size }): JSX.Element => (
  <div className={`clock-wrapper ${theme}`} 
       style={{width: `${size}px`, height: `${size}px`}}>
    <Dial shape={shape} >
      <TimeContext.Provider value={time}>
        <Hands />
      </TimeContext.Provider>
      <Marks />
    </Dial>
  </div>
);
export default Clock;