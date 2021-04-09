import React from 'react';
import { NavContainer, MainFolderNav, SubFolderNav } from './Navigation.styled';
import { Folder } from '../../types';
import Item from './NavItem';

const FolderNavigation = () => {
  return (
    <NavContainer>
      <MainFolderNav>
        <Item folder={Folder.Entities} to="/" />
        <Item folder={Folder.GridVariants} to="/grid-editor" />
        <Item folder={Folder.Items} to="/" />
      </MainFolderNav>
    </NavContainer>
  );
};

export default FolderNavigation;
