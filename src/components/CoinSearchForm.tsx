import { ChangeEvent, useState } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import { CurrencyPair } from '../types';
import { AlertMessage } from './AlertMessage';

export const CoinSearchForm = () => {
  /** State for managing cryptocurrency data. */
  const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies);
  const fetchData = useCryptoStore(state => state.fetchData);

  /** State for managing currency pair selection. */
  const [currencyPair, setCurrencyPair] = useState<CurrencyPair>({
    currency: '',
    cryptocurrency: '',
  });

  /** State for managing error messages. */
  const [error, setError] = useState<string>('');

  /**
   * Handles changes in the select input elements.
   * Updates the `currencyPair` state with the selected value based on the input's name.
   *
   * @param e - The change event from the HTML select element.
   */
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrencyPair(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handles form submission.
   * Validates the `currencyPair` state to ensure that both currency and cryptocurrency are selected.
   * Displays an error message if validation fails.
   * If validation passes, the function clears any previous error and can be extended to consult an API.
   *
   * @param e - The form event from the HTML form element.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(currencyPair).includes('')) {
      setError('Por favor, seleccione una moneda y una criptomoneda.');
      return;
    }
    setError('');
    fetchData(currencyPair);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {error && <AlertMessage>{error}</AlertMessage>}
      {/* Currencies */}
      <div className='form-field'>
        <label htmlFor='currency'>Moneda</label>
        <select
          name='currency'
          id='currency'
          onChange={handleChange}
          value={currencyPair.currency}
        >
          <option value=''>Seleccione</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      {/* Cryptocurrencies */}
      <div className='form-field'>
        <label htmlFor='cryptocurrency'>Criptomoneda</label>
        <select
          name='cryptocurrency'
          id='cryptocurrency'
          onChange={handleChange}
          value={currencyPair.cryptocurrency}
        >
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
