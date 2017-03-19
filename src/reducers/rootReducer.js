import { combineReducers } from 'redux';

import pages from './pages';
import toggle from './toggle';

export default combineReducers({
  pages,
  toggle,
});
