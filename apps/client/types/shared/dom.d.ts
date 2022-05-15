import {
  ClipboardEventHandler,
  CompositionEventHandler,
  FormEventHandler,
  ReactEventHandler,
} from 'react';

export interface AriaLabelingProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-details'?: string;
}

export interface AriaValidationProps {
  'aria-errormessage'?: string;
}

export interface DOMProps {
  id?: string;
}

export interface FocusableDOMProps extends DOMProps {
  excludeFromTabOrder?: boolean;
}
