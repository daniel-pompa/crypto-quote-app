import { currencies } from '../data';
import { useCryptoStore } from '../store';

export const CoinSearchForm = () => {
  const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies);

  return (
    <form className='form'>
      <div className='form-field'>
        <label htmlFor='currency'>Moneda</label>
        <select name='currency' id='currency'>
          <option value=''>Seleccione</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor='cryptocurrency'>Criptomoneda</label>
        <select name='cryptocurrency' id='cryptocurrency'>
          <option value=''>Seleccione</option>
          {cryptocurrencies.map(cryptocurrency => (
            <option
              key={cryptocurrency.CoinInfo.Name}
              value={cryptocurrency.CoinInfo.Name}
            >
              {cryptocurrency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type='submit' value='Cotizar' />
    </form>
  );
};
