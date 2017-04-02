/* --------------    ACTION CONSTANTS    ---------------- */
const TOGGLE_FONT_SIZE = 'TOGGLE_FONT_SIZE';
const TOGGLE_CONTRAST = 'TOGGLE_CONTRAST';
const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_VIDEO = 'TOGGLE_VIDEO';

/* --------------    ACTION CREATORS    ----------------- */
export const toggleFontSize = () => ({ type: TOGGLE_FONT_SIZE });
export const toggleContrast = () => ({ type: TOGGLE_CONTRAST });
export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const toggleVideo = () => ({ type: TOGGLE_VIDEO });

/* ------------------    REDUCER    --------------------- */

const initialState = {
  largeFont: false,
  highContrast: false,
  menu: false,
  video: true
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case TOGGLE_FONT_SIZE:
      newState.largeFont = !state.largeFont;
      break;
    case TOGGLE_CONTRAST:
      const body = document.getElementsByTagName('body')[0];
      body.className = body.className.includes('high-contrast')
        ? body.className.replace('high-contrast', '')
        : `${body.className} high-contrast`;
      newState.highContrast = !state.highContrast;
      break;
    case TOGGLE_MENU:
      newState.menu = !state.menu;
      break;
    case TOGGLE_VIDEO:
      newState.video = !state.video;
      break;
    default:
      return state;
  }
  return newState;
};
