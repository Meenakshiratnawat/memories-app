import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';

//combined reducers used to combine the posts into one reducers function 
export const reducers = combineReducers({ posts,auth });