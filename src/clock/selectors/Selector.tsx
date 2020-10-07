import React from 'react';
import './Selector.css';

type ButtonProp = {
  innerText: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Button: React.FC<ButtonProp> = ({ innerText, selected, onClick }): JSX.Element => (
  <div className={`button ${selected ? "selected" : ""}`} onClick={onClick}>
    {innerText}
  </div>
);

type SelectorProp = {
  selection: ButtonProp[];
};
const Selector: React.FC<SelectorProp> = ({ selection }): JSX.Element => (
  <div className="selector">
    {selection.map((choice) => 
      <Button key={choice.innerText} 
              innerText={choice.innerText}
              selected={choice.selected}
              onClick={
                (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => choice.onClick(event)
              }
      />
    )}
  </div>
);

export default Selector;
