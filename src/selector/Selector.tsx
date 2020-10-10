import React, { useReducer } from 'react';
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
  selection: ButtonProp[];
};
const Selector: React.FC<SelectorProp> = ({ selection }): JSX.Element => (
  <div className="selector">
    {selection.map((choice: ButtonProp): JSX.Element => 
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

export type SelectState = { [prop: string]: boolean; };
type SelectDispatch = [SelectState, React.Dispatch<string>];
type Selection = { [prop: string]: string; };

export const useSelection = (selection: Selection, initSelect: string): SelectDispatch => {
  const reducer = (state: SelectState, action: string): SelectState => {
    Object.keys(state).forEach(
      (key) => state[key] = key === action
    );

    return { ...state };
  };

  const initialState: SelectState = getInitialSelectState(selection, initSelect);
  
  return useReducer(reducer, initialState);
};

const getInitialSelectState = (selection: Selection, initSelect: string): SelectState => {
  const result: SelectState = {};

  Object.values(selection).forEach(
    (value: string) => result[value] = value === initSelect
  );

  return result;
}
