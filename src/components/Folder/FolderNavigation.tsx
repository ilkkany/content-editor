import React from 'react';
import { NavContainer, MainFolderNav, SubFolderNav } from './FolderNavigation.styled'
import { Folder } from '../../types';
import Tab from './FolderTab';

const FolderNavigation = () => {
  return (
    <NavContainer>
      <MainFolderNav>
        <Tab folder={Folder.Entities} to="/" />
        <Tab folder={Folder.GridVariants} to="/grid-editor" />
        <Tab folder={Folder.Items} to="/" />
      </MainFolderNav>
    </NavContainer>
  )
}

export default FolderNavigation;
