import axios from 'axios'

const initialState = [];

//constants
const LOAD_PAGES = 'LOAD_PAGES';

//actions creators
const receivePages = (pages) => {
  return {
    type: LOAD_PAGES,
    pages
  }
}

export const loadPages = () => {
  return dispatch => 
    axios.get('http://localhost:8888/dart-site/wp-json/wp/v2/pages')
      .then(pages =>{
        console.log('PAGES res', pages)
        return dispatch(receivePages(pages.data))
      })
}

//reducer
const pagesReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState)

  switch (action.type){
    case LOAD_PAGES:
      newState.pages = action.pages;
      break;
  }
  return newState;
}

<<<<<<< Updated upstream
export default pagesReducer;
=======

export default pagesReducer;
>>>>>>> Stashed changes
