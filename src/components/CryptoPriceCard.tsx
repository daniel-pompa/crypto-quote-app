import { useMemo } from 'react';
import { useCryptoStore } from '../store';
import { Spinner } from './Spinner';

export const CryptoPriceCard = () => {
  const result = useCryptoStore(state => state.result);
  const loading = useCryptoStore(state => state.loading);

  const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);

  const { IMAGEURL, PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = result;

  if (!hasResult) return null;

  if (loading) return <Spinner />;

  return (
    <div className='crypto-card'>
      <img
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt='Cryptocurrency'
        className='crypto-image'
      />
      <div className='crypto-info'>
        <h2 className='crypto-title'>Cotización</h2>
        <p className='crypto-price'>
          Precio: <span className='price-value'>{PRICE}</span>
        </p>
        <p className='crypto-detail'>
          Máximo del día: <span>{HIGHDAY}</span>
        </p>
        <p className='crypto-detail'>
          Mínimo del día: <span>{LOWDAY}</span>
        </p>
        <p
          className={`crypto-detail change ${
            CHANGEPCT24HOUR.startsWith('-') ? 'negative' : 'positive'
          }`}
        >
          Variación últimas (24h): {CHANGEPCT24HOUR}%
        </p>
        <p className='crypto-detail'>Última actualización: {LASTUPDATE}</p>
      </div>
    </div>
  );
};
