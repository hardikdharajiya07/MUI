import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';

describe('useToggle hook', () => {
  test('should use initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  test('should toggle state', () => {
    const { result } = renderHook(() => useToggle(false));
    
    act(() => {
      result.current[1](); // Call the toggle function
    });

    expect(result.current[0]).toBe(true);
  });
});