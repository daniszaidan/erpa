import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTitle from '../ButtonTitle';
import { SparklesIcon } from '@heroicons/react/24/outline';

describe('ButtonTitle', () => {
  it('renders with required props', () => {
    render(<ButtonTitle title="Test Button" />);

    expect(screen.getByText('Test Button')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('renders with icon', () => {
    render(
      <ButtonTitle
        title="Test Button"
        icon={<SparklesIcon data-testid="sparkles-icon" />}
      />
    );

    expect(screen.getByTestId('sparkles-icon')).toBeDefined();
  });

  it('applies custom className', () => {
    render(<ButtonTitle title="Test Button" className="custom-class" />);

    const button = screen.getByRole('button');
    const className = button.className;
    expect(className).toContain('custom-class');
  });

  it('renders as link when href is provided', () => {
    render(<ButtonTitle title="Test Button" href="/test-link" />);

    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByRole('link')).toHaveProperty(
      'href',
      expect.stringContaining('/test-link')
    );
  });

  it('applies target attribute when provided', () => {
    render(
      <ButtonTitle title="Test Button" href="/test-link" target="_blank" />
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement.getAttribute('target')).toBe('_blank');
  });

  it('applies linkClassName when provided', () => {
    render(
      <ButtonTitle
        title="Test Button"
        href="/test-link"
        linkClassName="link-class"
      />
    );

    const linkElement = screen.getByRole('link');
    const className = linkElement.className;
    expect(className).toContain('link-class');
  });

  it('applies titleClassName when provided', () => {
    render(<ButtonTitle title="Test Button" titleClassName="title-class" />);

    const titleElement = screen.getByText('Test Button');
    const className = titleElement.className;
    expect(className).toContain('title-class');
  });

  it('uses primary variant by default', () => {
    render(<ButtonTitle title="Test Button" />);

    const titleElement = screen.getByText('Test Button');
    const className = titleElement.className;
    expect(className).toContain('text-black');
  });

  it('applies primary variant when specified', () => {
    render(<ButtonTitle title="Test Button" variant="primary" />);

    const titleElement = screen.getByText('Test Button');
    const className = titleElement.className;
    expect(className).toContain('text-black');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<ButtonTitle title="Test Button" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes additional props to button element', () => {
    render(
      <ButtonTitle title="Test Button" data-testid="custom-button" disabled />
    );

    const button = screen.getByTestId('custom-button');
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('has correct aria-label', () => {
    render(<ButtonTitle title="Test Button" />);

    const button = screen.getByRole('button');
    expect(button.hasAttribute('aria-label')).toBe(true);
  });
});
