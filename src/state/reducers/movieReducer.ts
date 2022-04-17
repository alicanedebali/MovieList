import {MovieInterface} from "../action-types/movie.interface";
import {Action} from "../actions";
import {ActionTypes} from "../action-types";
export const movieReducer =(state: MovieInterface={}, action:Action)=>{
    switch (action.type){
        case ActionTypes.ENTITIES:
            return action.payload;
        case ActionTypes.SELECTED:
            return action.payload;
        default:
            return state;
    }
}