import { z } from 'zod';
import { CurrencySchema, CryptoCurrencyResponseSchema } from '../schema/crypto-schema';

/** Type for representing a currency based on CurrencySchema. */
export type Currency = z.infer<typeof CurrencySchema>;

/** Type for representing a cryptocurrency based on CryptoCurrencyResponseSchema. */
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
