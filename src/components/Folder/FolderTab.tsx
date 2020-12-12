import React from 'react';
import { FolderTab } from './FolderNavigation.styled'
import { Folder } from '../../types';
import { Link } from "gatsby"

const Tab: React.FC<{folder: Folder, to: string}> = ({folder, to}) => {
  return (
    <Link to={to}>
      <FolderTab>
        {folder}
      </FolderTab>
    </Link>
  )
}

export default Tab;
