import { useState, useRef, useEffect } from 'react';

type PositionVariations = 'LEFT' | 'CENTER' | 'RIGHT';

export const useEndOfHorizontalScroll = <T extends HTMLElement>(id: string) => {
  const [value, setValue] = useState<PositionVariations>('LEFT');
  const ref = useRef<T>(null);

  const onScroll = (): void => {
    const { current: el } = ref;
    const position = el!.scrollLeft;
    const scrollRightEnd = el!.scrollWidth - el!.offsetWidth;
    if (scrollRightEnd - position < 10) setValue('RIGHT');
    else if (position < 10) setValue('LEFT');
    else setValue('CENTER');
  };

  useEffect(() => {
    document.getElementById(id)?.addEventListener('scroll', onScroll);
    return (): void => {
      document.getElementById(id)?.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [ref, value] as const;
};
