import React from 'react';
import { GridPositions } from '../types';

import { Select, Option } from './select.styled';
import { MetaData } from '../../../../pages/grid-editor';

export const MetadataSelect: React.FC<{
  options: string[];
  onChange: any;
  metadataField: MetaData;
}> = ({ options, onChange, metadataField }) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, metadataField);
  };
  return (
    <Select onChange={change}>
      {options.map(option => (
        <Option key={option} value={option}>{option}</Option>
      ))}
    </Select>
  );
};
