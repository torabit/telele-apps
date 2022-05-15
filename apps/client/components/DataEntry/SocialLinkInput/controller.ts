export interface SocialLinkState {
  title: string;
  url: string;
  displayTitleError: boolean;
  displayURLError: boolean;
  isDisabledButton: boolean;
}

export const initialSocialLinkState: SocialLinkState = {
  title: '',
  url: '',
  displayTitleError: false,
  displayURLError: false,
  isDisabledButton: true,
};

export type SocialLinkActions =
  | {
      type: 'HANDLE_INPUT_TEXT';
      field: 'title' | 'url';
      payload: string;
    }
  | {
      type: 'DISPLAY_ERROR';
      field: 'displayTitleError' | 'displayURLError';
      payload: boolean;
    }
  | {
      type: 'SET_DISABLED_BUTTON';
      field: 'isDisabledButton';
      payload: boolean;
    };

export const socialLinkReducer = (state: SocialLinkState, action: SocialLinkActions) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'DISPLAY_ERROR':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'SET_DISABLED_BUTTON':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default: {
      const _type: never = action;
      throw new Error(`${_type} is not Social Link Reducer Action`);
    }
  }
};
