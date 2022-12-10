import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/react';

import AppWrapper from '../components/UI/AppWrapper';
import Wrapper from '../components/UI/Wrapper';
import Range from '../components/UI/Range';
import Sort from '../components/Sort';
import Play from '../components/Play';

const Home = () => {
  const itemQuantityOptions = [2, 3, 4, 5];
  const valuesOptions = ['А', 9, 19, 50, 99, 999];

  return (
    <AppWrapper>
      <Head>
        <title>Тренажер &#34;Порядок&#34;</title>
      </Head>

      <Wrapper>
        <Range title='Кол-во предметов' options={itemQuantityOptions} />
        <Range title='Значения' options={valuesOptions} />
        <Sort />
        <Play />
      </Wrapper>
    </AppWrapper>
  );
};

export default Home;
