import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonTitle extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  className?: string;
  linkClassName?: string;
  titleClassName?: string;
  variant?: 'primary';
  target?: '_self' | '_blank' | '_parent' | '_top';
  href?: string;
}

export interface CardProps {
  item: TierItem;
}

export interface TierItem {
  tier: string;
  features: string[];
  price: string;
}

export interface NavigationProps {
  className?: string;
}

export interface RootLayoutProps {
  children: ReactNode;
}
