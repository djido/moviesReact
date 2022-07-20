import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import MovieRow from '../components/MovieRow';
import { MovieContext } from '../context/MovieState';
import { useWindowWidth } from '@react-hook/window-size';
import MovieCard from '../components/MovieCard';
import { IMovie } from '../types/movies';

const Movies = () => {
	const { popular, getPopularMovies, topRated, getTopRatedMovies } = useContext(MovieContext);
	const windowWidth = useWindowWidth({
		leading: true,
		wait: 0,
	});

	useEffect(() => {
		getPopularMovies();
		getTopRatedMovies();
	}, []);

	return (
		<Container>
			<h1 className="fw-bold py-3">Filmovi i serije za vas</h1>
			{windowWidth > 768 ? (
				<>
					<h3 className="py-3">Popularno</h3>
					<MovieRow posterWidth={190} arrowHeight={295} movies={popular} />
					<h3 className="py-3">U trendingu</h3>
					<MovieRow posterWidth={190} arrowHeight={295} movies={topRated} />
					<h3 className="py-3">Klasici umjetnosti</h3>
					<MovieRow posterWidth={190} arrowHeight={295} movies={popular} />
				</>
			) : (
				<>
					<h3 className="py-3">Popularno</h3>

					{popular.map((movie: IMovie) => (
						<>
							<MovieCard key={movie.id} movie={movie} posterWidth={120} />
						</>
					))}
				</>
			)}
		</Container>
	);
};
export default Movies;
