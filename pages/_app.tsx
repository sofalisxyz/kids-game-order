import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
