import React from 'react';
import Navigation from '../Navigation';

// Mock next/link
jest.mock('next/link', () => {
  return function MockedLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  } & React.HTMLAttributes<HTMLAnchorElement>) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock ButtonTitle component
jest.mock('../ButtonTitle', () => {
  return function MockedButtonTitle({
    title,
    icon,
    ...props
  }: {
    title: string;
    icon?: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button {...props}>
        {title}
        {icon && <span data-testid="icon">{icon}</span>}
      </button>
    );
  };
});

describe('Navigation', () => {
  it('Navigation component exists', () => {
    expect(Navigation).toBeDefined();
  });

  it('Navigation component is a function', () => {
    expect(typeof Navigation).toBe('function');
  });
});
