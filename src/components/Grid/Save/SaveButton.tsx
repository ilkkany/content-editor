import { StyledSaveButton } from './SaveButton.styled';
import { gql, useMutation } from '@apollo/client';
import { client } from '../../../backend/client';
import React from 'react';

const SAVE_GRID = gql`
  mutation saveGrid($grid: [[Int]]) {
    saveGrid(grid: $grid) {
      grid
    }
  }
`;

const SaveButton: React.FC<{ toSave: number[][] }> = ({ toSave, children }) => {
  const [saveGrid, { data }] = useMutation(SAVE_GRID, { client: client });

  const save = async () => {
    await saveGrid(toSave);
  };
  return <StyledSaveButton onClick={save}>{children}</StyledSaveButton>;
};

export default SaveButton;
