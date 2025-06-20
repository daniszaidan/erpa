import { tier } from '../tier';
import { TierItem } from '../types';

describe('tier data', () => {
  it('should be an array', () => {
    expect(Array.isArray(tier)).toBe(true);
  });

  it('should contain tier items', () => {
    expect(tier.length).toBeGreaterThan(0);
  });

  it('should have Basic tier', () => {
    const basicTier = tier.find(item => item.tier === 'Basic');
    expect(basicTier).toBeDefined();
  });

  it('should have Business tier', () => {
    const businessTier = tier.find(item => item.tier === 'Business');
    expect(businessTier).toBeDefined();
  });

  it('Basic tier should have correct structure', () => {
    const basicTier = tier.find(item => item.tier === 'Basic');
    
    expect(basicTier).toMatchObject({
      tier: 'Basic',
      features: expect.any(Array),
      price: expect.any(String)
    });
  });

  it('Business tier should have correct structure', () => {
    const businessTier = tier.find(item => item.tier === 'Business');
    
    expect(businessTier).toMatchObject({
      tier: 'Business',
      features: expect.any(Array),
      price: expect.any(String)
    });
  });

  it('Basic tier should have expected features', () => {
    const basicTier = tier.find(item => item.tier === 'Basic');
    
    expect(basicTier?.features).toEqual([
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan'
    ]);
  });

  it('Business tier should have correct features', () => {
    const businessTier = tier.find(item => item.tier === 'Business');
    expect(businessTier?.features).toEqual([
      'Mencatat barang masuk dan keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam'
    ]);
  });

  it('Basic tier should have correct price', () => {
    const basicTier = tier.find(item => item.tier === 'Basic');
    expect(basicTier?.price).toBe('Rp 99.000/bulan');
  });

  it('Business tier should have correct price', () => {
    const businessTier = tier.find(item => item.tier === 'Business');
    expect(businessTier?.price).toBe('Rp 199.000/bulan');
  });

  it('all tier items should conform to TierItem interface', () => {
    tier.forEach((item: TierItem) => {
      expect(item).toHaveProperty('tier');
      expect(item).toHaveProperty('features');
      expect(item).toHaveProperty('price');
      expect(typeof item.tier).toBe('string');
      expect(Array.isArray(item.features)).toBe(true);
      expect(typeof item.price).toBe('string');
    });
  });

  it('all features should be non-empty strings', () => {
    tier.forEach((item) => {
      item.features.forEach((feature) => {
        expect(typeof feature).toBe('string');
        expect(feature.length).toBeGreaterThan(0);
      });
    });
  });

  it('Business tier should have more features than Basic tier', () => {
    const basicTier = tier.find(item => item.tier === 'Basic');
    const businessTier = tier.find(item => item.tier === 'Business');
    
    expect(businessTier?.features.length).toBeGreaterThan(basicTier?.features.length || 0);
  });

  it('should have exactly 3 tiers', () => {
    expect(tier).toHaveLength(3);
  });
});