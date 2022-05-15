import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ssrActions } from '../../../states/ssrState';

const idsUpdaterMap: Map<string, (v: string) => void> = new Map();

export const useId = (defaultId?: string): string => {
  const isRendering = useRef<boolean>(true);
  isRendering.current = true;
  const [value, setValue] = useState<string | undefined>(defaultId);
  const nextId = useRef<string | undefined | null>(null);
  const useSSRSafeId = ssrActions.useSSRSafeId();
  const res = useSSRSafeId(value);

  const updateValue = (val?: string) => {
    if (!isRendering.current) {
      setValue(val);
    } else {
      nextId.current = val;
    }
  };

  idsUpdaterMap.set(res, updateValue);

  useLayoutEffect(() => {
    isRendering.current = false;
  }, [updateValue]);

  useLayoutEffect(() => {
    const r = res;
    return () => {
      idsUpdaterMap.delete(r);
    };
  }, [res]);

  useEffect(() => {
    const newId = nextId.current;
    if (newId) {
      setValue(newId);
      nextId.current = null;
    }
  }, [setValue, updateValue]);
  return res;
};
