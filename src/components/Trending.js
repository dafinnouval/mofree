import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [movieDetail, setMovieDetail] = useState([]);
    const [show, setShow] = useState();

    const handleClose = () => setShow("");

    const showDetail = (result) => {
        setMovieDetail(result);
        console.log(result);
        setShow("detail");
        window.scrollTo({ top: 700, behavior: "smooth" });
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY,
                },
            })
            .then((response) => {
                // console.log("datas => ", response.data.results);
                setMovies(response.data.results);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/movie/{movie_id}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY,
                },
            })
            .then((response) => {
                // console.log("datas => ", response.data.results);
                setMovieDetail(response.data.results);
            });
    }, []);

    return (
        <div>
            <Container className="movieWrapper">
                <br />
                <h1 className="text-white">POPULAR MOVIES</h1>
                <br />
                {show === "detail" && (
                    <div id="formDetail" className="card py-2 my-3 bg-dark">
                        <div className="card-body">
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    <h4 className="text-white">Detail Movies</h4>
                                    <Button variant="danger" className="float-end" onClick={handleClose}>
                                        X
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} sm={12} xs={12} className="text-center">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${movieDetail.poster_path}`} alt="" className="img-detail" />
                                </Col>
                                <Col md={9} sm={12} xs={12} className="text-white">
                                    <h4>
                                        Judul : <span className="sub-detail">{movieDetail.title}</span>
                                    </h4>
                                    <h4>
                                        Tanggal : <span className="sub-detail">{movieDetail.release_date}</span>
                                    </h4>
                                    <h4>
                                        Popularitas : <span className="sub-detail">{movieDetail.popularity}</span>
                                    </h4>
                                    <h4>
                                        Ratings : <span className="sub-detail">{movieDetail.vote_average}</span>
                                    </h4>
                                    <h4>
                                        Status : <span className="sub-detail">{movieDetail.status}</span>
                                    </h4>
                                    <h4>
                                        Deskripsi : <span className="sub-detail">{movieDetail.overview}</span>
                                    </h4>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )}
                <Row>
                    {movies.map((result, index) => {
                        return (
                            <Col className="d-flex justify-content-start m-3" id="trending" key={index} onClick={() => showDetail(result)}>
                                <Card className="movieImage">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="" className="images" />
                                    <div className="bg-white">
                                        <div className="p-2 m-1 text-dark">
                                            <Card.Title className="text-center">{result.title}</Card.Title>
                                            {/* <Card.Text className="text-left">{result.overview}</Card.Text> */}
                                            {/* <Card.Text className="text-left">{result.release_date}</Card.Text> */}
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Trending;
