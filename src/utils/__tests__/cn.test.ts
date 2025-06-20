import { cn } from '../cn';

describe('cn utility function', () => {
  it('combines multiple class names', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('handles conditional classes', () => {
    const result = cn('base-class', true && 'conditional-class', false && 'hidden-class');
    expect(result).toBe('base-class conditional-class');
  });

  it('handles undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2');
    expect(result).toBe('class1 class2');
  });

  it('handles empty strings', () => {
    const result = cn('class1', '', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('merges conflicting Tailwind classes', () => {
    const result = cn('p-4', 'p-8');
    expect(result).toBe('p-8');
  });

  it('handles arrays of classes', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('handles objects with boolean values', () => {
    const result = cn({
      'class1': true,
      'class2': false,
      'class3': true
    });
    expect(result).toBe('class1 class3');
  });

  it('handles complex combinations', () => {
    const result = cn(
      'base-class',
      {
        'conditional-class': true,
        'hidden-class': false
      },
      ['array-class1', 'array-class2'],
      undefined,
      'final-class'
    );
    expect(result).toBe('base-class conditional-class array-class1 array-class2 final-class');
  });

  it('returns empty string when no valid classes provided', () => {
    const result = cn(undefined, null, false, '');
    expect(result).toBe('');
  });

  it('handles single class name', () => {
    const result = cn('single-class');
    expect(result).toBe('single-class');
  });

  it('handles Tailwind responsive classes', () => {
    const result = cn('text-sm', 'md:text-base', 'lg:text-lg');
    expect(result).toBe('text-sm md:text-base lg:text-lg');
  });

  it('merges duplicate classes', () => {
    const result = cn('class1', 'class2', 'class1');
    expect(result).toBe('class1 class2 class1');
  });
});