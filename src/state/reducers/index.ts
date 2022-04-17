import { combineReducers } from "redux";
import {movieReducer} from "./movieReducer";

export const reducers = combineReducers({movie: movieReducer})


export type State = ReturnType<typeof reducers>