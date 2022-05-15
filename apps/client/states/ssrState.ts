import { useMemo } from 'react';
import { atom, useRecoilValue } from 'recoil';

interface SSRState {
  prefix: string;
  current: number;
}
interface SSRActions {
  useSSRSafeId: () => (defaultId?: string) => string;
}

const defaultSSRState: SSRState = {
  prefix: 'telele',
  current: 0,
};

const ssrState = atom<SSRState>({
  key: 'ssrState',
  default: defaultSSRState,
});

export const ssrActions: SSRActions = {
  useSSRSafeId: () =>
    function (defaultId?: string) {
      const ctx = useRecoilValue(ssrState);
      return useMemo(() => defaultId || `${ctx.prefix}-${ctx.current++}`, [defaultId]);
    },
};
