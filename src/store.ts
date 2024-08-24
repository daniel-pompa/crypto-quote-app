import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCurrency } from './types';
import { getCryptoCurrencies } from './services/CryptoService';

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptoData: () => void;
};

/** Zustand store for managing cryptocurrency data. */
export const useCryptoStore = create<CryptoStore>()(
  devtools(set => ({
    cryptocurrencies: [],

    /** Fetches cryptocurrency data from an external service and updates the store. */
    fetchCryptoData: async () => {
      const cryptocurrencies = await getCryptoCurrencies();
      set(() => ({ cryptocurrencies }));
    },
  }))
);
