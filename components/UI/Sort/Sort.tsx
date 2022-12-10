import React from 'react';
import styled from '@emotion/styled';
import { ISortProps } from './interface';

type FixMe = any;

const Wrapper: any = styled.div`
  width: 360px;
  height: 69px;

  background: red;
`;

const Sort: React.FC<ISortProps> = ({ sort }) => {
  return (
    <Wrapper sort={sort}>
      {sort === 'asc' ? 'По возрастанию' : 'По убыванию'}
    </Wrapper>
  );
};

export default Sort;
