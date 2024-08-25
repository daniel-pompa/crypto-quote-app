import { z } from 'zod';
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  CurrencyPairSchema,
  CryptoPriceResponseSchema,
} from '../schema/crypto-schema';

/** Type for representing a currency based on CurrencySchema. */
export type Currency = z.infer<typeof CurrencySchema>;

/** Type for representing a cryptocurrency based on CryptoCurrencyResponseSchema. */
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

/** Type for representing currency pairs. */
export type CurrencyPair = z.infer<typeof CurrencyPairSchema>;

/** Type for representing cryptocurrency prices. */
export type CryptoPrice = z.infer<typeof CryptoPriceResponseSchema>;
