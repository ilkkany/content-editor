import React, {useState, useEffect} from 'react';
import { StyledCell } from './cell.styled';

let colorMap = new Map([
    [0, '#fff'], // empty
    [1, '#eb9534'], // collider
    [2, '#42db51'], // foliage
    [3, '#e3dd27'], // item
    [4, '#e6257b'], // enemy
    [5, 'three'],
    [6, 'one'],
    [7, 'two'],
    [8, 'three'],
    [9, 'two'],
  ]);

export const Cell: React.FC<{value: number, row: number, column: number, callback: (row: number, column: number, value: number) => void}> = ({ value, row, column, callback }) => {
    let [cellValue, setCellValue] = useState(value);
    useEffect(() => {
        setCellValue(value);
    }, [value])

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        if (e.button === 0) {
            setCellValue(cellValue+=1);
        }
        if (e.button === 2) {
            setCellValue(cellValue-=1);
        }
        callback(row, column, cellValue);
    }

    return (
        <StyledCell background={colorMap.get(cellValue)} onClick={onClick} onContextMenu={onClick} />
    );
}