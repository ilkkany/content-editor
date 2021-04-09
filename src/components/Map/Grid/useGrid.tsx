import { useContext } from 'react';
import GridContext from './grid-context';

export default () => {
  const context = useContext(GridContext);

  return context;
};
