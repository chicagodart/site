import axios from 'axios';
import { resolve } from 'uri-js';

import { apiDomain } from '../../.config.json';

const root = apiDomain || '/';
const apiRoot = './wp-json/wp/v2/';
const initialState = {};

// constants
const LOAD_POSTS = 'LOAD_POSTS';

// actions creators
const receivePosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const loadPosts = slug => (dispatch) => {
  const catReq = slug
    ? axios.get(resolve(resolve(root, apiRoot), './categories'), { params: { slug } })
    : Promise.resolve({});
  return catReq
    .then(({ data: cats }) => {
      const query = cats && cats[0] ? { categories: cats[0].id } : {};
      return axios.get(resolve(resolve(root, apiRoot), './posts'), {
        params: query });
    })
    .then(res => res.data)
    .then(posts => dispatch(receivePosts(posts)));
};

export const loadPost = slug => dispatch =>
  axios.get(`${apiRoot}/posts`, { params: { slug } })
    .then(({ data: posts }) => {
      dispatch(receivePosts(posts));
    });

// reducer
const postsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts.reduce((result, curr) => {
        if (curr.status === 'publish') result[curr.slug] = curr;
        return result;
      }, {});
    default:
      return prevState;
  }
};

export default postsReducer;
