import React from 'react';
import styled from '@emotion/styled';
import Modal from '../UI/Modal';
import Image from 'next/image';
import Button from '../UI/Button';
import Link from 'next/link';

const ModalText = styled.div`
  margin-top: 22px;
  text-align: center;
  font-size: 40px;
  color: #5f40a1;
`;

const ReplayButton = styled(Button)`
  margin-top: auto;
  background: #2bd600;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 70px;
  font-size: 40px;
  color: #fff;
  opacity: 1;

  &:hover {
    background: #38df7a;
  }
`;

const WinModal = () => {
  return (
    <Modal>
      <Image
        src={'/assets/img/victory.svg'}
        alt={''}
        width={'530'}
        height={'165'}
      />
      <ModalText>Молодец! Ты успешно справился с заданием!</ModalText>
      <ReplayButton as={Link} href='/'>
        Заново
      </ReplayButton>
    </Modal>
  );
};

export default WinModal;
