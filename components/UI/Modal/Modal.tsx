import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { css } from '@emotion/react';

const borderSize = '20px';
const sameStyles = `
  display: flex;
  align-items: center;
`;

const WindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background: rgba(32, 21, 54, 0.6);
  ${sameStyles}
  justify-content: center;
`;

const Border = styled.div`
  z-index: 100;
  position: relative;
  width: 661px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(103, 223, 137, 1) 0%,
    transparent 45%
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  padding: ${borderSize} ${borderSize} 0 ${borderSize};
  border-radius: 40px;
  ${sameStyles}
`;

const Wrapper = styled.div`
  ${sameStyles}
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px 75px 30px;
  border-radius: ${borderSize};

  .img {
    position: absolute;

    &--top-left {
      top: -30px;
      left: -50px;
    }
    &--bottom-left {
      bottom: -58px;
      left: -109px;
    }
    &--top-right {
      top: 99px;
      right: -83px;
    }
    &--bottom-right {
      bottom: -36px;
      right: -47px;
    }
  }
`;

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <WindowWrapper>
      <Border>
        <Wrapper>
          <Image
            className='img img--top-left'
            src={'/assets/img/modal-arrow.svg'}
            alt={''}
            width={'154'}
            height={'148'}
          />

          <Image
            className='img img--bottom-left'
            src={'/assets/img/modal-arrow.svg'}
            alt={''}
            width={'216'}
            height={'223'}
          />

          <Image
            className='img img--top-right'
            src={'/assets/img/modal-arrow.svg'}
            alt={''}
            width={'216'}
            height={'223'}
          />

          <Image
            className='img img--bottom-right'
            src={'/assets/img/modal-arrow.svg'}
            alt={''}
            width={'120'}
            height={'123'}
          />
          {children}
        </Wrapper>
      </Border>
    </WindowWrapper>
  );
};

export default Modal;
