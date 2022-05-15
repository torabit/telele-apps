import { useEffect } from 'react';
import { useLocalStorage, useMedia } from '.';

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>('dark-mode-enabled', true);
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const element = window.document.body;
    if (enabled) {
      element.dataset.theme = 'dark';
    } else {
      element.dataset.theme = 'light';
    }
  }, [enabled]);
  return [enabled, setEnabledState] as const;
};

const usePrefersDarkMode = () => {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false);
};
