/* --------------    ACTION CONSTANTS    ---------------- */
const TOGGLE_FONT_SIZE = 'TOGGLE_FONT_SIZE';
const TOGGLE_CONTRAST = 'TOGGLE_CONTRAST';

/* --------------    ACTION CREATORS    ----------------- */
export const toggleFontSize = () => ({ type: TOGGLE_FONT_SIZE });
export const toggleContrast = () => ({ type: TOGGLE_CONTRAST });

/* ------------------    REDUCER    --------------------- */

const initialState = {
  largeFont: false,
  highContrast: false,
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case TOGGLE_FONT_SIZE:
      newState.largeFont = !state.largeFont;
      break;
    case TOGGLE_CONTRAST:
      newState.highContrast = !state.highContrast;
      break;
    default:
      return state;
  }
  return newState;
};
