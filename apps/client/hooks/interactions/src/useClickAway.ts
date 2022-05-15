import { RefObject, useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

export const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  /* TODO: ClickだけじゃなくてKeyDownも含めたonPressとして作成するべき */
  const savedCallback = useRef<(event: E) => void>(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      if (el && !el.contains(event.target)) savedCallback.current(event);
    };
    events.forEach((eventName) => {
      document.addEventListener(eventName, handler);
    });
    return () => {
      events.forEach((eventName) => {
        document.removeEventListener(eventName, handler);
      });
    };
  }, [events, ref]);
};
