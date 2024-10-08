import { Currency } from '../types';

/**
 * An array of the 10 most traded currencies in the world for crypto asset transactions, along with their respective codes and names.
 * These currencies are highly influential in both global financial markets and the cryptocurrency space.
 */
export const currencies: Currency[] = [
  { code: 'CHF', name: 'Franco suizo' },
  { code: 'GBP', name: 'Libra esterlina' },
  { code: 'EUR', name: 'Euro' },
  { code: 'USD', name: 'Dólar estadounidense' },
  { code: 'AUD', name: 'Dólar australiano' },
  { code: 'CAD', name: 'Dólar canadiense' },
  { code: 'CNY', name: 'Yuan chino' },
  { code: 'JPY', name: 'Yen japonés' },
  { code: 'HKD', name: 'Dólar de Hong Kong' },
  { code: 'KRW', name: 'Won surcoreano' },
];
