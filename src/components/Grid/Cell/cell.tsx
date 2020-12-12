import React, { useState, useEffect, useContext } from 'react';
import { StyledCell } from './cell.styled';
import { GridContext } from '../grid-context';
import { legendMap } from '../Legend/legend'

export const Cell: React.FC<{
  value: number;
  row: number;
  column: number;
  callback: (row: number, column: number, value: number) => void;
}> = ({ value, row, column, callback }) => {
  let [cellValue, setCellValue] = useState(value);
  const { setClickValue, clickValue } = useContext(GridContext);
  useEffect(() => {
    setCellValue(value);
  }, [value]);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.button === 0) {
      setCellValue(clickValue);
    }
    if (e.button === 2) {
      setCellValue(cellValue -= 1);
      setClickValue(cellValue -= 1);
    }
    callback(row, column, cellValue);
  };

  return (
    <StyledCell
      background={legendMap.get(cellValue)}
      onDragOver={onClick}
      onClick={onClick}
      onContextMenu={onClick}
    />
  );
};

export default Cell;
