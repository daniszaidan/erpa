// Import jest-dom matchers
import '@testing-library/jest-dom';
import React from 'react';

// Mock next/image
jest.mock('next/image', () => {
  return {
    __esModule: true,
    default: function NextImage(props) {
      return React.createElement('img', {
        src: props.src,
        alt: props.alt,
        ...props,
      });
    },
  };
});

// Mock next/link
jest.mock('next/link', () => {
  return function NextLink({ children, href, ...props }) {
    return React.createElement('a', { href, ...props }, children);
  };
});

// Mock @heroicons/react/24/outline
jest.mock('@heroicons/react/24/outline', () => ({
  CheckIcon: () => <svg data-testid="check-icon" />,
  ArrowRightIcon: () => <svg data-testid="arrow-right-icon" />,
  SparklesIcon: () => <svg data-testid="sparkles-icon" />,
}));
