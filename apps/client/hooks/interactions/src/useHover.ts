import { useState, useRef, useEffect } from 'react';

export const useHover = <T extends HTMLElement>() => {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<T>(null);

  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);

  useEffect(() => {
    const { current: el } = ref;
    el!.addEventListener('mouseover', handleMouseOver);
    el!.addEventListener('mouseout', handleMouseOut);
    return () => {
      el!.removeEventListener('mouseover', handleMouseOver);
      el!.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref.current]);

  return [ref, value] as const;
};
