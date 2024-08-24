/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { CoinSearchForm } from './components';
import { useCryptoStore } from './store';

function App() {
  const getData = useCryptoStore(state => state.fetchCryptoData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className='app-title'>
        Cotización de <span>Criptomonedas</span>
      </h1>
      <p className='app-description'>
        Cotiza tus criptomonedas al instante con la API de CryptoCompare.
      </p>
      <div className='content'>
        <CoinSearchForm />
      </div>
    </>
  );
}

export default App;
