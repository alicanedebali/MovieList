import {MovieInterface} from "./movie.interface";

export interface MovieSearchInterface {
    Response?: string;
    Search?: MovieInterface[];
    totalResults?: number;

}