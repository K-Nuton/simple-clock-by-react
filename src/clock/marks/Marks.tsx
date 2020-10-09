import React from 'react';
import '../dials/Dial.scss';
import './Marks.scss';

type MarkProp = {
  degree: number;
};
const Mark: React.FC<MarkProp> = ({ degree }): JSX.Element => (
  <div style={{ transform: `rotate(${degree}deg)` }}>
    <div></div>
  </div>
);

const Marks: React.FC = (): JSX.Element => (
  <div className={'dial-overLay marks'}>
    {[...Array(12)]
      .map((_: null, index: number): number => 30 * index)
      .map((degree: number): JSX.Element => <Mark key={degree.toString()} degree={degree} />)}
  </div>
);


export default Marks;