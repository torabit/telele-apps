import { useLayoutEffect } from 'react';

export const useLockBodyScroll = (shouldLock: boolean = true): void => {
  useLayoutEffect((): (() => void) => {
    if (!shouldLock) {
      return () => {};
    }
    const originalStyle: string = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
