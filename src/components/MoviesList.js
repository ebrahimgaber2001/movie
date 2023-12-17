import React, { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
import {useDispatch,useSelector } from 'react-redux';
import {MovieAction} from "../redux/action/MovieAction"


const MoviesList = () => {
  const [movies, setMovies] = useState([])
    const dispatch=useDispatch()
    const dataMovies=useSelector((state)=> state.movies)
    useEffect(() => {
      dispatch(MovieAction())
    }, [])
    useEffect(() => {
      setMovies(dataMovies)
    }, [dataMovies])


    
  return (
    
    <Row className="mt-5">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

      {movies.length >= 1 ? (<PaginationComponent  />) : null}

    </Row>
  );
};

export default MoviesList;
