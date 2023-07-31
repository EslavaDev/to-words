import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'Peso',
      plural: 'Pesos',
      symbol: '$',
      fractionalUnit: {
        name: 'Centavo',
        plural: 'Centavos',
        symbol: '',
      },
    },
    texts: {
      and: 'Y',
      minus: 'Menos',
      only: 'Solo',
      point: 'Punto',
    },
    numberWordsMapping: [
      { number: 1000000000000000, value: 'Cuatrillón' },
      { number: 1000000000000, value: 'Trillón' },
      { number: 1000000000, value: 'Billón' },
      { number: 1000000, value: 'Millón' },
      { number: 1000, value: 'Mil' },
      { number: 100, value: 'Cien' },
      { number: 90, value: 'Noventa' },
      { number: 80, value: 'Ochenta' },
      { number: 70, value: 'Setenta' },
      { number: 60, value: 'Sesenta' },
      { number: 50, value: 'Cincuenta' },
      { number: 40, value: 'Cuarenta' },
      { number: 30, value: 'Treinta' },
      { number: 20, value: 'Veinte' },
      { number: 19, value: 'Diecinueve' },
      { number: 18, value: 'Dieciocho' },
      { number: 17, value: 'Diecisiete' },
      { number: 16, value: 'Dieciséis' },
      { number: 15, value: 'Quince' },
      { number: 14, value: 'Catorce' },
      { number: 13, value: 'Trece' },
      { number: 12, value: 'Doce' },
      { number: 11, value: 'Once' },
      { number: 10, value: 'Diez' },
      { number: 9, value: 'Nueve' },
      { number: 8, value: 'Ocho' },
      { number: 7, value: 'Siete' },
      { number: 6, value: 'Seis' },
      { number: 5, value: 'Cinco' },
      { number: 4, value: 'Cuatro' },
      { number: 3, value: 'Tres' },
      { number: 2, value: 'Dos' },
      { number: 1, value: 'Uno' },
      { number: 0, value: 'Cero' },
    ],
    exactWordsMapping: [{ number: 100, value: 'Cien' }],
  };
}