import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { TierItem } from '@/utils/types';

const mockTierItem: TierItem = {
  tier: 'Basic',
  features: [
    'Mencatat barang masuk',
    'Mencatat barang keluar',
    'Mencatat hasil keuntungan',
  ],
  price: 'Rp 99.000/bulan',
};

const mockBusinessTierItem: TierItem = {
  tier: 'Business',
  features: [
    'Mencatat barang masuk dan keluar',
    'Mencatat Keuntungan',
    'Dapat menganalisa hasil penjualan dengan CHART',
    'Support 7x24 Jam',
  ],
  price: 'Rp 199.000/bulan',
};

describe('Card', () => {
  it('renders tier name correctly', () => {
    render(<Card item={mockTierItem} />);

    expect(screen.getByText('Basic')).toBeDefined();
  });

  it('renders all features', () => {
    render(<Card item={mockTierItem} />);

    expect(screen.getByText('Mencatat barang masuk')).toBeDefined();
    expect(screen.getByText('Mencatat barang keluar')).toBeDefined();
    expect(screen.getByText('Mencatat hasil keuntungan')).toBeDefined();
  });

  it('renders check icons for each feature', () => {
    render(<Card item={mockTierItem} />);

    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(mockTierItem.features.length);
  });

  it('renders ButtonTitle with price', () => {
    render(<Card item={mockTierItem} />);

    expect(screen.getByText('Beli Rp 99.000/bulan')).toBeDefined();
  });

  it('renders ButtonTitle with arrow icon', () => {
    render(<Card item={mockTierItem} />);

    expect(screen.getByTestId('arrow-right-icon')).toBeDefined();
  });

  it('applies correct styling to card container', () => {
    const { container } = render(<Card item={mockTierItem} />);

    const cardElement = container.firstChild as HTMLElement;
    const className = cardElement.className;
    expect(className).toContain('bg-[#f3f1f1]');
    expect(className).toContain('p-25');
    expect(className).toContain('rounded-20');
    expect(className).toContain('flex');
    expect(className).toContain('flex-col');
    expect(className).toContain('gap-50');
    expect(className).toContain('justify-between');
    expect(className).toContain('items-start');
  });

  it('applies correct styling to tier badge', () => {
    render(<Card item={mockTierItem} />);

    const tierBadge = screen.getByText('Basic');
    const className = tierBadge.className;
    expect(className).toContain('bg-white');
    expect(className).toContain('py-5');
    expect(className).toContain('px-15');
    expect(className).toContain('rounded-full');
    expect(className).toContain('text-[15px]');
    expect(className).toContain('font-[600]');
  });

  it('renders business tier correctly', () => {
    render(<Card item={mockBusinessTierItem} />);

    expect(screen.getByText('Business')).toBeDefined();
    expect(screen.getByText('Beli Rp 199.000/bulan')).toBeDefined();
    expect(screen.getByText('Support 7x24 Jam')).toBeDefined();
  });

  it('renders correct number of features for business tier', () => {
    render(<Card item={mockBusinessTierItem} />);

    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(mockBusinessTierItem.features.length);
  });

  it('each feature has a check icon and text', () => {
    render(<Card item={mockTierItem} />);

    mockTierItem.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeDefined();
    });

    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(mockTierItem.features.length);
  });

  it('feature items have correct styling', () => {
    render(<Card item={mockTierItem} />);

    const featureText = screen.getByText('Mencatat barang masuk');
    const className = featureText.className;
    expect(className).toContain('text-[20px]');
    expect(className).toContain('font-[400]');
  });
});
