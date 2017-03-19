import axios from 'axios';
import IPaddress from '../../IPaddress';

const initialState = [];

// constants
const LOAD_PAGES = 'LOAD_PAGES';

// actions creators
const receivePages = pages => ({
  type: LOAD_PAGES,
  pages
});

export const loadPages = () => dispatch =>
    axios.get(`${IPaddress}:8888/dart-site/wp-json/wp/v2/pages`)
      .then((pages) => {
        console.log('PAGES res', pages);
        return dispatch(receivePages(pages.data));
      });

// reducer
const pagesReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGES:
      return action.pages;
  }
  return prevState;
};

export default pagesReducer;
