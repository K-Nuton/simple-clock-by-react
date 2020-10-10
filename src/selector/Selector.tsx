import React from 'react';
import { Selection } from '../Enums';
import './Selector.scss';

export type ButtonProp = {
  innerText: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Button: React.FC<ButtonProp> = ({ innerText, selected, onClick }): JSX.Element => (
  <div className={`button ${selected ? "selected" : ""}`} 
       onClick={onClick}>
    {innerText}
  </div>
);

type SelectorProp = {
  selection: Selection;
  selectTarget: string;
  onClick: (selectTarget: string) => void;
};
const Selector: React.FC<SelectorProp> = ({ selection, selectTarget, onClick }): JSX.Element => (
  <div className="selector">
    {Object.values(selection).map((item: string): JSX.Element => 
      <Button key={item}
              innerText={item}
              selected={item===selectTarget}
              onClick={
                (event) => onClick((event.target as HTMLElement).innerText)
              }/>
    )}
  </div>
);

export default Selector;