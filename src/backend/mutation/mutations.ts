import { useMutation, gql } from '@apollo/client';
import { client } from '../client';

const SAVE_GRID = gql`
  mutation saveGrid($grid: [[Int]]) {
    saveGrid(grid: $grid) {
      grid
    }
  }
`;

export const SaveGrid = (grid: number[][]) => {
  const [saveGrid, { data }] = useMutation(SAVE_GRID, { client: client });
  saveGrid(grid);
};
