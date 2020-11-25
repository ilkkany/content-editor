import React, { useState, useEffect } from 'react';
import Cell from '../components/Grid/Cell';
import SaveButton from '../components/Grid/Save';
import {
  StyledGrid,
  MainSection,
  SideSection,
  Flex,
} from './grid-editor.styled';
import { gql, useQuery } from '@apollo/client';
import { client } from '../backend/client';
import { clone } from 'ramda';

const CREATE_GRID = gql`
  query createGrid {
    createGrid {
      grid
    }
  }
`;

const GridEditor = () => {
  const [gridData, update] = useState<number[][]>([]);
  const { loading, error, data } = useQuery(CREATE_GRID, { client: client });
  
  useEffect(() => {
    if (!loading && gridData.length === 0) {
      const {
        createGrid: { grid },
      } = data;
      update(clone(grid));
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const callback = (row: number, column: number, value: number) => {
    const copy = [...gridData];
    copy[row][column] = value;
    update(copy);
  };

  return (
    <Flex>
      <SideSection></SideSection>
      <MainSection>
        <StyledGrid background="#36454f">
          {gridData.map((row, index) => (
            <div key={"row" + index.toString()}>
              {row.map((cellId, rowIdx) => (
                <Cell
                  value={cellId}
                  row={index}
                  column={rowIdx}
                  key={cellId + index + "column"+rowIdx}
                  callback={callback}
                />
              ))}
            </div>
          ))}
        </StyledGrid>
        <SaveButton toSave={gridData}>Save</SaveButton>
      </MainSection>
      <SideSection></SideSection>
    </Flex>
  );
};

export default GridEditor;
