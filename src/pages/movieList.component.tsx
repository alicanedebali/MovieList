import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../state";
import {MovieInterface} from "../state/action-types/movie.interface";
import {MovieSearchInterface} from "../state/action-types/movieSearch.interface";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AutoComplete, Pagination, Select, Table} from "antd";
import 'antd/dist/antd.css';
import {MovieParamInterface} from "../state/action-types";
import {useNavigate} from "react-router-dom";

const { Option } = Select;


export const MovieListComponent = () => {
    const navigate = useNavigate();
    const [getParams, setParams] = useState({s: 'pokemon', page: 1, plot: 'full', type: 'movie'} as MovieParamInterface)
    const [isSearch, setIsSearch] = useState(false)
    const dispatch = useDispatch();
    const movieList = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: State) => state.movie) as MovieSearchInterface
    if(!state?.Search?.length && !isSearch) {
        movieList.getMovies({...getParams})
        setIsSearch(true)
    }
    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title'
        },
        {
            title: 'Imdb Rating',
            dataIndex: 'imdbRating'
        },
        {
            title: 'Type',
            dataIndex: 'Type',

        },
        {
            title: 'Year',
            dataIndex: 'Year'
        }
    ];

    const types = [
        {
            title: 'Movie',
            value: 'movie'
        },
        {
            title: 'Series',
            value: 'series'
        },
        {
            title: 'Episode',
            value: 'episode',

        }]

    const changePage = (index: number) => {
        setParams({...getParams, page: index})
        movieList.getMovies({...getParams})
    }
    const changeType =(value: string) => {
        setParams({...getParams,page:1, type: value})
        movieList.getMovies({...getParams, type: value})
    }

    const selectedMovie = (movie: MovieInterface) => {
        navigate("/detail/" + movie.imdbID);
    }

    const handleSearch=(e: string)=> {
        setParams({...getParams, s: e})
        movieList.getMovies({...getParams, s: e})
    }

    const handleYear =(year:string)=> {
        setParams({...getParams, y: year})
        movieList.getMovies({...getParams, y: year})
    }

    return (
        <div className='container-fluid p-5'>

            <div className='d-flex justify-content-between'>
                <div className="d-flex align-items-center">
                    <span> Search:</span>
                    <AutoComplete
                        className={'mx-1'}
                        style={{width: 200}}
                        onSearch={handleSearch}
                        placeholder="Enter Movie"
                        value={getParams.s}>
                    </AutoComplete>
                </div>
                <div className="d-flex align-items-center">
                    <span> Year:</span>
                    <AutoComplete
                        className={'mx-1'}
                        style={{width: 200}}
                        onSearch={handleYear}
                        placeholder="Enter Year"
                        value={getParams.y || 0}>
                    </AutoComplete>
                </div>
                <div className="d-flex align-items-center">
                    <span> Type:</span>
                    <Select
                        defaultValue={getParams.type}
                        className={"mx-1"}
                        style={{width: 120}}
                        onChange={changeType}>
                        {types?.map(type => <Option value={type.value}>{type.title}</Option>)}
                    </Select>
                </div>
            </div>
            <Table columns={columns || []} dataSource={state?.Search || []}
                   pagination={false} onRow={(record, rowIndex) => {
                return {
                    onClick: () => selectedMovie(record as MovieInterface),
                };
            }}/>
            <div className="d-flex justify-content-end mt-2">
                <Pagination defaultCurrent={1} total={parseInt((state?.totalResults || 0) / 10 + '')}
                            onChange={changePage}/>
            </div>
        </div>
    )
}