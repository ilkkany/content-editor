import React, { useState, useEffect } from 'react';
import { Floors, GridPositions } from '../types';
import { Form } from './metadata.styled';
import { MetadataSelect } from './select'
import { MetaData } from '../../../pages/grid-editor'

export const Metadata: React.FC<{callback: any}> = ({ callback }) => {

  const onChange = (value: String, field: MetaData) => {
    callback(value, field)
  }

  return (
    <Form>
      <MetadataSelect metadataField={{grid: true, floor: false}} onChange={onChange} options={[GridPositions.Left, GridPositions.Center, GridPositions.Right]}/>
      <MetadataSelect metadataField={{grid: false, floor: true}} onChange={onChange} options={[Floors.Top, Floors.Center, Floors.Bottom]} />
    </Form>
  );
};

export default Metadata;
