import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';

const Wrapper = styled.div``;

const Play = () => {
  return (
    <Wrapper>
      <Button size='large' as={Link} href='/game'>
        Играть
      </Button>
    </Wrapper>
  );
};

export default Play;
