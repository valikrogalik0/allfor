import { combineReducers } from "redux";
import { photo } from "./photo";
import { news } from './news';

export default combineReducers({ photo, news });
