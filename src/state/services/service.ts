import {MovieParamInterface} from "../action-types";
import axios from "axios";
export function objToQueryString(obj:MovieParamInterface) {
    obj.apikey=process.env.REACT_APP_API_KEY as string;
    // @ts-ignore
    return '?'+Object.keys(obj).map(key=> encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&')
}

export const getMoviesWithParam= (params:MovieParamInterface)=>{
    return axios.get(process.env.REACT_APP_API_URL as string+`${objToQueryString(params || {})}`)
}

export const getMoviesWithId= (id:string)=>{
    return axios.get(process.env.REACT_APP_API_URL as string+`${objToQueryString({i:id})}`)
}