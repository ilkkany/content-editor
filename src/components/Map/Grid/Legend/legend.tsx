import React from 'react';
import { StyledCell } from '../Cell/cell.styled';
import { Inline } from './legend.styled';
import useGrid from '../useGrid';

export enum LegendType {
  Empty = 0,
  GroundCollider = 1,
  WallCollider = 2,
  Foliage = 3,
  Item = 4,
  Enemy = 5,
  Ladder = 6,
  Objective = 7,
  Ore = 8,
}

export const legendMap = new Map([
  [LegendType.Empty, '#fff'], // empty
  [LegendType.GroundCollider, '#eb9534'], // groundcollider
  [LegendType.WallCollider, '#A070A0'], // wallcollider
  [LegendType.Foliage, '#42db51'], // foliage
  [LegendType.Item, '#e3dd27'], // item
  [LegendType.Enemy, '#e6257b'], // enemy
  [LegendType.Ladder, '#DEB887'],
  [LegendType.Objective, '#663030'],
  [LegendType.Ore, '#00CC33'], // mineable
]);

const Legend = () => {
  const { setClickValue } = useGrid();

  const vals = Object.keys(LegendType).filter(key =>
    isNaN(Number(LegendType[key]))
  );
  const texts = Object.keys(LegendType).filter(
    key => !isNaN(Number(LegendType[key]))
  );
  return (
    <>
      {vals.map((val, index) => (
        <Inline key={texts[index]}>
          <StyledCell
            border
            onClick={() => setClickValue(Number(val))}
            background={legendMap.get(Number(val))}
          />
          <p>{texts[index]}</p>
        </Inline>
      ))}
    </>
  );
};

export default Legend;
