import React, { useContext, useEffect } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import apiConfig from '../api/apiConfig';
import { MovieContext } from '../context/MovieState';
import { IMovie } from '../types/movies';

const MovieCard = ({ movie, posterWidth = 190 }: { movie: IMovie; posterWidth?: number }) => {
	const { favorites, addToFavorites, removeFromFavorites, getFavorites } = useContext(MovieContext);
	useEffect(() => getFavorites(), []);

	const isFavorite = favorites !== null ? favorites.some((fav: { id: number }) => fav.id === movie.id) : false;

	const toggleFavorite = (e: React.SyntheticEvent) => {
		e.stopPropagation();
		!isFavorite ? addToFavorites(movie.id) : removeFromFavorites(movie.id);
	};

	return (
		<Link to={`/movies/${movie.id}`}>
			<div
				className="movie-card"
				style={{
					width: `${posterWidth}px`,
				}}
			>
				<img src={`${apiConfig.w300Image(movie.poster_path)}`} alt={movie.title} />
				<div className="overlay-container">
					<div className="overlay-body">
						<FaBookmark
							size={25}
							color={`${isFavorite ? 'red' : 'rgba(255,255,255,0.5)'}`}
							onClick={e => {
								e.preventDefault();
								toggleFavorite(e);
							}}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default MovieCard;
