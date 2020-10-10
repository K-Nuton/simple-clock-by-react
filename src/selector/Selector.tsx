import React from 'react';
import { Selection } from '../Enums';
import './Selector.scss';

type ButtonProp = {
  innerText: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Button: React.FC<ButtonProp> = ({ innerText, selected, onClick }): JSX.Element => (
  <div className={`button${selected ? " selected" : ""}`} onClick={onClick}>
    {innerText}
  </div>
);

type SelectorProp = {
  selectItems: Selection;
  selectTarget: string;
  onClickItem: (clickedItemsInnerText: string) => void;
};
const Selector: React.FC<SelectorProp> = ({ selectItems, selectTarget, onClickItem }): JSX.Element => (
  <div className="selector">
    {Object.values(selectItems).map(
      (item: string): JSX.Element => 
        <Button key={item}
                innerText={item}
                selected={item===selectTarget}
                onClick={(event) => 
                  onClickItem((event.target as HTMLElement).innerText)} />
    )}
  </div>
);

export default Selector;