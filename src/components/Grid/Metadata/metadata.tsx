import React, { useState, useEffect } from 'react';
import { MetadataInput, Form } from './metadata.styled';

export const Metadata: React.FC = () => {
  const onSubmit = () => {

  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <Form onSubmit={onSubmit}>
      <MetadataInput onChange={onChange} />
    </Form>
  );
};

export default Metadata;
