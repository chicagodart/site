import {combineReducers} from 'redux';
import  pagesReducer from './pages';
import postsReducer from './posts'

export default combineReducers({
 pages: pagesReducer,
 posts: postsReducer,
});
