import React from 'react';
import { Shape } from '../../Enums';
import './Dial.scss'

type DialProps = {
  shape: Shape;
};
const Dial: React.FC<DialProps> = ({ children, shape }): JSX.Element => (
  <div className={`dial ${shape}`} >
    {children}
  </div>
);

export default Dial;