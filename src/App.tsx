import { CryptoSearchForm } from './components';

function App() {
  return (
    <>
      <h1 className='app-title'>
        Cotización de <span>Criptomonedas</span>
      </h1>
      <p className='app-description'>
        Cotiza tus criptomonedas al instante con la API de CryptoCompare.
      </p>
      <div className='content'>
        <CryptoSearchForm />
      </div>
    </>
  );
}

export default App;
