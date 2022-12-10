import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';

const PlayButton = styled(Button)`
  margin-top: auto;
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 12px 73px 12px;
  color: #fff;
  opacity: 1;

  &:hover {
    background: #2bd600;
  }
`;

const Play = () => {
  return (
    <PlayButton as={Link} href='/game'>
      Играть
    </PlayButton>
  );
};

export default Play;