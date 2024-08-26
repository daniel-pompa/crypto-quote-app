import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCurrency, CryptoPrice, CurrencyPair } from './types';
import { fetchCurrentCryptoPrice, getCryptoCurrencies } from './services/CryptoService';

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptoData: () => Promise<void>;
  fetchData: (currencyPair: CurrencyPair) => Promise<void>;
};

/** Zustand store for managing cryptocurrency data. */
export const useCryptoStore = create<CryptoStore>()(
  devtools(set => ({
    cryptocurrencies: [],
    result: {
      IMAGEURL: '',
      PRICE: '',
      HIGHDAY: '',
      LOWDAY: '',
      CHANGEPCT24HOUR: '',
      LASTUPDATE: '',
    },
    loading: false,
    /** Fetches cryptocurrency data from an external service and updates the store. */
    fetchCryptoData: async () => {
      const cryptocurrencies = await getCryptoCurrencies();
      set(() => ({ cryptocurrencies }));
    },
    /** Fetches cryptocurrency price data from an external service and updates the store. */
    fetchData: async currencyPair => {
      set(() => ({ loading: true }));
      const result = await fetchCurrentCryptoPrice(currencyPair);
      set(() => ({ result, loading: false }));
    },
  }))
);
