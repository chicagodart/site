import { combineReducers } from 'redux';

import pages from './pages';
import posts from './posts';
import toggle from './toggle';

export default combineReducers({
  pages,
  posts,
  toggle,
});
