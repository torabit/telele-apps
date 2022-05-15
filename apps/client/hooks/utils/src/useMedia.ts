import { useEffect, useState } from 'react';

export const useMedia = <T>(queries: string[], values: T[], defaultValue: T): T => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const mediaQueryLists = queries.map((q) => window.matchMedia(q));

    const getValue = () => {
      const index = mediaQueryLists.findIndex((mql) => mql.matches);
      return values?.[index] || defaultValue;
    };

    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
    };
  }, []);

  return value;
};
