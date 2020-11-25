import styled from 'styled-components';

export const StyledGrid = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 640px;
  height: 640px;
  background-color: ${p => (p.background ? p.background : '#fff')};
`;

export const MainSection = styled.div`
  margin: 0 auto;
  width: 33vw;
`;
export const SideSection = styled.div`
  width: 30vw;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;

export const StyledSaveButton = styled.button``;
