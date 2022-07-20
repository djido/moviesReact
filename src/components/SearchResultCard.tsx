import React from 'react';
import { IMovie } from '../types/movies';

const SearchResultCard = ({ movie }: { movie: IMovie }) => {
	return (
		<div className="search-card">
			<div className="poster-wrapper">
				{movie.poster_path ? (
					<img src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`} alt={`${movie.title} Poster`} />
				) : (
					<div className="filler-poster" />
				)}
			</div>

			<div className="info">
				<div className="header">
					<h3 className="title">{movie.title}</h3>
					<h4 className="release-date">film, {movie.release_date.split('-')[0]}</h4>
				</div>
			</div>
		</div>
	);
};

export default SearchResultCard;
