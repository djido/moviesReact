import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { MovieContext } from '../context/MovieState';
import { IMovie } from '../types/movies';
import Button from '../components/Button';
import MovieCard from '../components/MovieCard';
import { useHistory } from 'react-router-dom';
import IconRow from '../components/IconRow';

const Favorites = () => {
	const movieContext = useContext(MovieContext);
	const { favorites, getFavorites } = movieContext;
	const history = useHistory();

	useEffect(() => {
		getFavorites();
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<h3 className="py-4 fw-bold">Moja lista</h3>
					{favorites && favorites.length > 0 ? (
						<div className="py-5">
							{favorites.map((movie: IMovie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</div>
					) : (
						<>
							<h5>Na vašoj listi nema filmova</h5>
							<Button onClick={() => history.push('/movies')} backgroundColor="#FBC500" color="black" marginRight="1em">
								Dodajte filmove već sad
							</Button>
						</>
					)}
					<IconRow />
				</Col>
			</Row>
		</Container>
	);
};

export default Favorites;
