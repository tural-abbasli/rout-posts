import { combineReducers } from 'redux';

import { postsReducer,postReducer } from './reducer';

export default combineReducers({
    posts: postsReducer,
    post: postReducer
});