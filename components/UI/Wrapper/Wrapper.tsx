import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const borderSize = '20px';
const sameStyles = `
  display: flex;
  align-items: center;
`;

const Border = styled.div`
  width: 699px;
  height: 660px;
  background: linear-gradient(198.7deg, #7f75f0 -40.02%, #101f32 96.22%);
  padding: ${borderSize};
  border-radius: 40px;
  ${sameStyles}
`;

const Inner = styled.main`
  ${sameStyles}
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 42px 63px 32px;
  border-radius: ${borderSize};
`;

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Border>
      <Inner>{children}</Inner>
    </Border>
  );
};

export default Wrapper;
