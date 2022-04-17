import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../state";
import {MovieInterface} from "../state/action-types/movie.interface";
import {Avatar, Card, Divider} from "antd";
import {useParams} from "react-router-dom";
import {bindActionCreators} from "redux";
import Meta from "antd/lib/card/Meta";

export const MovieDetail = () => {
    const params = useParams();
    const state = useSelector((state: State) => state.movie) as MovieInterface
    const dispatch = useDispatch();
    const movieList = bindActionCreators(actionCreators, dispatch)
    !state?.Title && movieList.fetchSelectedMovies(params.id as string)
    return (
        <div className=" w-100 d-flex flex-column justify-content-center align-items-center p-5">
            <Card
                hoverable
                style={{width: 300}}
                cover={<img alt="example" src={state.Poster} height={250}/>}
            >
                <Meta title={state?.Title} description=" " className={"text-center"}/>
                <Divider className={"my-3"}/>

                <div className="d-flex w-100 justify-content-between">
                    <Meta className={"text-capitalize"} title="Director" description={state?.Director}/>
                    <Meta className={"text-capitalize"} title="runtime" description={state?.Runtime}/>
                </div>
                <Divider className={"my-3"}/>
                <div className="d-flex w-100 justify-content-between">
                    <Meta className={"text-capitalize"} title="Type" description={state?.Type}/>
                    <Meta className={"text-capitalize"} title="Imdb Rate" description={state?.imdbRating}/>
                </div>
                <Divider className={"my-3"}/>
                <Meta className={"text-capitalize"} title="Actors" description={state?.Actors}/>
            </Card>
        </div>

    )
}