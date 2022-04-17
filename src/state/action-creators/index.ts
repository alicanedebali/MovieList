import {ActionTypes, MovieParamInterface} from "../action-types";
import {Dispatch} from "react";
import {Action} from "../actions";
import {getMoviesWithId, getMoviesWithParam} from "../services/service";
import {MovieInterface} from "../action-types/movie.interface";
import {AxiosResponse} from "axios";

export const getMovies=(params: MovieParamInterface)=>{
    return async (dispatch:Dispatch<Action>)=>{
        await getMoviesWithParam(params).then((res:AxiosResponse<MovieInterface[]>)=>{
            dispatch({type: ActionTypes.ENTITIES, payload: res.data })
        });
    }
}

export const fetchSelectedMovies=(id: string)=>{
    return async (dispatch:Dispatch<Action>)=>{
        await getMoviesWithId(id).then((res:AxiosResponse<MovieInterface[]>)=>{
            dispatch({type: ActionTypes.ENTITIES, payload: res.data })
        });
    }
}