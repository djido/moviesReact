import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import CallToAction from '../components/CallToAction';
import IconRow from '../components/IconRow';
import MovieRow from '../components/MovieRow';
import { MovieContext } from '../context/MovieState';
import ReccomandationsImg from '../images/recommendations.webp';
import SearchImg from '../images/search.webp';
import WatchlistImg from '../images/watchlist.webp';

const Home = () => {
	const history = useHistory();
	const { popular, getPopularMovies, topRated, getTopRatedMovies } = useContext(MovieContext);

	useEffect(() => {
		getPopularMovies();
		getTopRatedMovies();
	}, []);

	return (
		<>
			<div className="hero d-flex justify-content-around">
				<Container>
					<Row className="pt-5">
						<Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }} className="my-4">
							<h1 className="display-3 fw-bold">Sve vaše platforme za streaming u jednoj aplikaciji.</h1>
							<p className="py-3">
								Dobijte personalizirane preporuke za filmove i serije dostupne na platformi Netflix. Amazon Prime Video,
								Ivi i još mnogo toga.
							</p>
							<div className="py-3">
								<Button
									onClick={() => history.push('/movies')}
									backgroundColor="#FBC500"
									color="black"
									marginRight="1em"
								>
									Otkrijte filmove i serije
								</Button>
								<Button onClick={() => console.log('Funkcionalnosti')} border="1px solid white">
									Funkcionalnosti
								</Button>
							</div>
							<div className="py-2">
								<h6 className="pb-2">Platforme za streaming na Just Watchu</h6>
								<IconRow />
							</div>
						</Col>
						<Col xs md={6}>
							<Container>
								<Row className="py-5">
									<Col className="border border-5 p-0">
										<MovieRow posterWidth={125} arrowHeight={187.5} movies={topRated} />
										<MovieRow posterWidth={125} arrowHeight={187.5} movies={popular} />
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>

			<Container>
				<Row>
					<Col xs={12} md={6} className="py-5">
						<img className="img-fluid" src={ReccomandationsImg} alt="Reccomandations" />
					</Col>
					<Col xs md={6} className="align-self-center px-5">
						<h6 className="subtitle py-3">Sve na jednom mjestu</h6>
						<h2 className="fw-bold py-3">Vaš vodič kroz streaming</h2>
						<p className="fs-5">
							Dobijte osobne preporuke i pogledajte što ima novo na vašim omiljenim platformama za streaming.
						</p>
					</Col>
				</Row>

				<Row>
					<Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }} className="align-self-center px-5">
						<h6 className="subtitle py-3">Jedno pretraživanje</h6>
						<h2 className="fw-bold">Jedno pretraživanje da vlada svima</h2>
						<p className="fs-5">
							Nema više prebacivanja s platforme na platformu kako biste pronašli dostupne filmove ili serije.
						</p>
					</Col>
					<Col xs md={6} className="d-flex justify-content-end py-5">
						<img className="img-fluid" src={SearchImg} alt="Search movies" />
					</Col>
				</Row>

				<Row>
					<Col xs={12} md={6} className="py-5">
						<img className="img-fluid" src={WatchlistImg} alt="Watchlist" />
					</Col>
					<Col xs md={6} className="align-self-center px-5">
						<h6 className="subtitle py-3">Jedna lista</h6>
						<h2 className="fw-bold">Spojite sve svoje liste</h2>
						<p className="fs-5">
							Na jednoj listi na svim svojim uređajima pratite serije i filmove koje želite pogledati.
						</p>
					</Col>
				</Row>
			</Container>

			<CallToAction />
		</>
	);
};
export default Home;
