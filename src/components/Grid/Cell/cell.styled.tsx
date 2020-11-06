import styled from 'styled-components';

export const StyledCell = styled.div<{ background?: string }>`
  width: 32px;
  height: 32px;
  background-color: ${p => (p.background ? p.background : '#fff')};
  margin: 4px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
