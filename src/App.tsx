import React from 'react';
import { useRoutes} from 'react-router-dom';
import './App.css';
import {MovieListComponent} from "./pages/movieList.component";
import {MovieDetail} from "./pages/movieDetail.component";

function App() {
    return useRoutes([
        { path: "/", element: <MovieListComponent /> },
        { path: "/detail/:id", element: <MovieDetail /> }
    ]);
}

export default App;
