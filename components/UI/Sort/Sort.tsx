import React from 'react';
import styled from '@emotion/styled';
import { ISortProps } from './interface';

const Wrapper = styled.div<ISortProps>`
  position: relative;
  width: 360px;
  height: 69px;
  margin-left: ${(props) => (props.sort === 'asc' ? '10px' : 'auto')};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.sort === 'asc' ? 'start' : 'end')};
  font-size: 36px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #242546;
  color: #fff;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/assets/img/sort-arrow.svg') center / contain no-repeat;
    z-index: -1;
    transform: rotate(
      ${(props) => (props.sort === 'asc' ? '0 deg' : '180deg')}
    );
  }
`;

const Sort: React.FC<ISortProps> = ({ sort }) => {
  return (
    <Wrapper sort={sort}>
      {sort === 'asc' ? 'По возрастанию' : 'По убыванию'}
    </Wrapper>
  );
};

export default Sort;
