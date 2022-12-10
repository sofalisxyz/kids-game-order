import Head from 'next/head';

import AppWrapper from '../components/UI/AppWrapper';
import Wrapper from '../components/UI/Wrapper';
import Sort from '../components/Sort';
import Play from '../components/Play';
import ItemQuantityRange from '../components/ItemQuantityRange';
import ValuesRange from '../components/ValuesRange';

const Home = () => {
  return (
    <AppWrapper>
      <Head>
        <title>Тренажер &#34;Порядок&#34;</title>
      </Head>

      <Wrapper>
        <ItemQuantityRange />
        <ValuesRange />
        <Sort />
        <Play />
      </Wrapper>
    </AppWrapper>
  );
};

export default Home;
