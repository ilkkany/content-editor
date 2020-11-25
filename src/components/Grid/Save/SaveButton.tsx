import { StyledSaveButton } from './SaveButton.styled';
import { gql, useMutation } from '@apollo/client';
import { client } from '../../../backend/client';
import React from 'react';
import { Biomes, GridPositions } from '../types';

const SAVE_GRID = gql`
  mutation saveGrid($grid: [Int!], $position: String, $biome: String) {
    saveGrid(grid: $grid, position: $position, biome: $biome ) {
      grid
    }
  }
`;

const SaveButton: React.FC<{ toSave: number[][] }> = ({ toSave, children }) => {
  const [saveGrid, { loading, error, data }] = useMutation(SAVE_GRID, { client: client });

  const save = async () => {
    await saveGrid({ variables: { grid: toSave.flat(), position: GridPositions.Left, biome: Biomes.SPACE_COLONY} });
  };
  return <StyledSaveButton onClick={save}>{children}</StyledSaveButton>;
};

export default SaveButton;
