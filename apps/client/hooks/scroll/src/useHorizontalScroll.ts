import { useEffect, RefObject } from 'react';

export const useHorizontalScroll = (ref: RefObject<HTMLElement>) => {
  const onScroll = (e: globalThis.WheelEvent) => {
    if (e.deltaX === 0) {
      e.stopPropagation();
      e.preventDefault();

      ref.current!.scrollBy(e.deltaY, 0);
    }
  };

  useEffect(() => {
    const { current: el } = ref;
    el!.addEventListener('wheel', (e) => onScroll(e));
    return () => {
      el!.removeEventListener('wheel', onScroll);
    };
  }, [ref.current]);
};
