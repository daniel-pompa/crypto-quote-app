import { z } from 'zod';

/** Schema for validating currency objects. */
export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

/** Schema for validating individual cryptocurrency responses. */
export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

/** Schema for validating an array of cryptocurrency responses. */
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

/** Schema for validating currency pairs. */
export const CurrencyPairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

/** Schema for validating cryptocurrency price responses. */
export const CryptoPriceResponseSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
});
