import React, { useState, useEffect } from 'react'
import { Cell } from '../components/cell'
import {StyledGrid, StyledSaveButton, MainSection, SideSection, Flex} from './grid-editor.styled'

const data = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

const GridEditor = () => {
    const [gridData, update] = useState<number[][]>([]);

    useEffect(() => {
        update(data);
    },[])
    const callback = (row: number, column: number, value: number) => {
        const clone = gridData;
        clone[row][column] = value;
        update(clone);
    }
    const saveGrid = () => {
        const g = gridData;
    }

    return (
        <Flex>
            <SideSection></SideSection>
            <MainSection>
                <StyledGrid background="#36454f">
                    {
                    gridData.map((row, index) => (
                        <tr key={row[0] + index}>
                        {row.map((cellId, rowIdx) => <Cell value={cellId} row={index} column={rowIdx} key={cellId + index + rowIdx} callback={callback} />)}
                        </tr>
                    ))
                    }
                </StyledGrid>
                <StyledSaveButton onClick={saveGrid}>Save</StyledSaveButton>
            </MainSection>
            <SideSection></SideSection>
        </Flex>
    )
}

export default GridEditor
