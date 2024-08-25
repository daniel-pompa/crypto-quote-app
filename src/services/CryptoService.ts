import axios from 'axios';
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceResponseSchema,
} from '../schema/crypto-schema';
import { CurrencyPair } from '../types';

export const getCryptoCurrencies = async () => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

  const {
    data: { Data },
  } = await axios.get(url);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) return result.data;
};

export const fetchCurrentCryptoPrice = async (currencyPair: CurrencyPair) => {
  const { currency, cryptocurrency } = currencyPair;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

  const {
    data: { DISPLAY },
  } = await axios.get(url);

  const result = CryptoPriceResponseSchema.safeParse(DISPLAY[cryptocurrency][currency]);

  if (result.success) return result.data;
};
