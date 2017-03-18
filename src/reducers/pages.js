const initialState = [];

//constants
const LOAD_PAGES = 'LOAD_PAGES';

//actions creators
const loadPages = (pages) => {
  return {
    type: LOAD_PAGES,
    pages,
  }
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

export default pagesReducer;