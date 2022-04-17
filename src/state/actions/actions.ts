import {ActionTypes, MovieParamInterface} from "../action-types";
import {MovieInterface} from "../action-types/movie.interface";

interface GetMovies {
    type:ActionTypes.ENTITIES,
    filter?:MovieParamInterface,
    payload?:MovieInterface[]
}

interface SelectMovie {
    type:ActionTypes.SELECTED,
    payload?:MovieInterface
}

export type Action= GetMovies | SelectMovie;