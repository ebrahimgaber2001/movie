import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])
    const [show, setShow] = useState([])

    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=33e9f7173c080aff42ef4e617f839045&language=ar`)
        setMovie(res.data)
        
    }
    const getMovieShow = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=33e9f7173c080aff42ef4e617f839045&language=en-Us`)
        setShow(res.data)
        
    }
    useEffect(() => {
        getMovieShow();
        getMovieDetails();
    }, [])
    return (
        <div className='mt-5'>
                    <Row className='card-detalis  mb-4'>
                        <Col lg="6" md="12" xs="12" sm="12" className="mt-5 mb-3 ">
                        <div className=" ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="ascad"
                        />
                        </div>
                        </Col >
                        <Col lg="6" md="12" xs="12" sm="12" className="mt-5 mb-3 ">
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{movie.vote_average}
                            </p>
                        </div>
                        </Col>
                    </Row>
             

            <Row className=" card-cont">
                <Col  className="mt-1  mb-3">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="my-5 d-flex  justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#3E54AC", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={show.homepage} >
                        <button
                            style={{ backgroundColor: "#3E54AC", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails



