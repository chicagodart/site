import axios from 'axios'

const initialState = {};

//constants
const LOAD_POSTS = 'LOAD_POSTS';

//actions creators
const receivePosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export const loadPosts = () => {
  return dispatch =>
    axios.get('http://192.168.0.108:8888/dart-site/wp-json/wp/v2/posts')
      .then(posts => dispatch(receivePosts(posts.data)))
}

//reducer
const postsReducer = (prevState = initialState, action) => {
  switch (action.type){
    case LOAD_POSTS:
      return action.posts
  }
  return prevState;
}

export default postsReducer;
