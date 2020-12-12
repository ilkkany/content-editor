import styled from 'styled-components';

export const StyledCell = styled.div<{ background?: string, border?: boolean }>`
  width: 32px;
  height: 32px;
  background-color: ${p => (p.background ? p.background : '#fff')};
  border: ${p => (p.border ? '1px solid #e3e3e3': '')};
  margin: 4px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
