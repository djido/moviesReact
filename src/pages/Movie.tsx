import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

import MovieRow from '../components/MovieRow';
import VideoList from '../components/VideoList';
import { MovieContext } from '../context/MovieState';
import { IMovie } from '../types/movies';

type MovieParams = {
	id: string;
};

const Movie = () => {
	const { id } = useParams<MovieParams>();

	const { popular, getPopularMovies } = useContext(MovieContext);
	const [movie, setMovie] = useState<IMovie | null>(null);

	useEffect(() => {
		getPopularMovies();
	}, []);

	const originalImage = (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`;

	const fetchMovie = async (movieId: string) => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US`,
		);
		const response = await data.json();
		console.log(response);
		setMovie(response);
	};

	useEffect(() => {
		fetchMovie(id);
	}, [id]);

	return (
		<div>
			{movie && (
				<>
					<div
						className="banner"
						style={{
							backgroundImage: `url(${originalImage(movie.backdrop_path || movie.poster_path)})`,
						}}
					/>
					<Container className="mb-3 container ">
						<Row className="primary-background movie-margin-top-200 p-3">
							<Col md={4}>
								<img
									className="img-fluid rounded"
									height={500}
									src={`${originalImage(movie.poster_path || movie.backdrop_path)}`}
									alt={movie.title}
								/>
								<h6 className="subtitle py-2">Žanrovi</h6>
								{movie.genres &&
									movie.genres.slice(0, 5).map((genre, i) => (
										<span key={genre.id}>
											{genre.name}
											{i < movie.genres.length - 1 ? ', ' : ''}
										</span>
									))}
								<h6 className="subtitle py-2">Ocjena</h6>
								<p>{movie.vote_average}</p>
							</Col>
							<Col md={8}>
								<div className="movie-info">
									<h4 className="fw-bold">
										{movie.title} ({movie.release_date.split('-')[0]})
									</h4>

									<h6 className="subtitle py-2">Sinopsis</h6>
									<p>{movie.overview}</p>

									<h6 className="subtitle py-2">Onima kojima se sviđa {movie.title} sviđa se i</h6>
									<MovieRow posterWidth={125} arrowHeight={187.5} movies={popular} />
									<h6 className="subtitle py-2">Video: najave, teaseri, dodatni sadržaji</h6>
									<VideoList id={movie.id} />
								</div>
							</Col>
						</Row>
					</Container>
				</>
			)}
		</div>
	);
};

export default Movie;
