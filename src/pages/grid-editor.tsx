import React, { useState, useEffect } from 'react';
import Cell from '../components/Grid/Cell';
import Metadata from '../components/Grid/Metadata'
import SaveButton from '../components/Grid/Save';
import {
  StyledGrid,
  MainSection,
  SideSection,
  Flex,
  Column,
  Row,
} from './grid-editor.styled';
import { gql, useQuery } from '@apollo/client';
import { client } from '../backend/client';
import { clone } from 'ramda';
import { Floors, GridPositions } from '../components/Grid/types';

const CREATE_GRID = gql`
  query createGrid {
    createGrid {
      grid
    }
  }
`;

export interface MetaData {
  floor: boolean,
  grid: boolean,
}

export interface MetadataValue {
  floor: Floors,
  grid: GridPositions,
}

const GridEditor = () => {
  const [gridData, update] = useState<number[][]>([]);
  const [metadata, setMetadata] = useState<MetadataValue>({} as MetadataValue);
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

  const metadataCallback = (meta: any, field: MetaData) => {
    debugger
    if (field.grid) {
      setMetadata({ grid: meta, floors: metadata.floor })
    }
    if (field.floor) {
      setMetadata({ grid: metadata.grid, floors: meta })
    }
  }

  const RenderRow = (row: number[], index: number) => {
    return (
      <Row id="row">
      {
        row.map((cellId, rowIdx) => (
          <Cell
            value={cellId}
            row={index}
            column={rowIdx}
            key={cellId + index + "column"+rowIdx}
            callback={callback}
          />
        ))
      }
      </Row>
    )
  }

  const RenderGrid = () => {
    return (
      <>
      {gridData.map(RenderRow)}
      </>
    )
  }

  return (
    <Column>
      <Flex>
        <SideSection></SideSection>
        <MainSection>
          <StyledGrid background="#36454f">
            {RenderGrid()}
          </StyledGrid>
          <SaveButton toSave={gridData} metadata={metadata}>Save</SaveButton>
        </MainSection>
        <SideSection></SideSection>
      </Flex>
      <Metadata callback={metadataCallback} />
    </Column>
  );
};

export default GridEditor;
