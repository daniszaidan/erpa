import { TierItem } from './types';

export const tier: TierItem[] = [
  {
    tier: 'Basic',
    features: [
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan',
    ],
    price: 'Rp 99.000/bulan',
  },
  {
    tier: 'Business',
    features: [
      'Mencatat barang masuk dan keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam',
    ],
    price: 'Rp 199.000/bulan',
  },
  {
    tier: 'Entrepreneur',
    features: [
      'Mencatat barang masuk dan keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam',
      'Export data ke Excel',
      'AI Prediksi penghasilan',
    ],
    price: 'Rp 299.000/bulan',
  },
];
