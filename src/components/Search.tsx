import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieState';
import { IMovie } from '../types/movies';

import SearchResultCard from './SearchResultCard';

const Search = () => {
	const [hasFocus, setFocus] = useState(false);

	const movieContext = useContext(MovieContext);
	const { movies, findMovie } = movieContext;
	const searchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
		findMovie(e.target.value);
	};

	return (
		<div className="search-bar">
			<div className="input-wrapper">
				<input
					type="text"
					onChange={searchMovies}
					placeholder="Pretraži filmove"
					onFocus={() => setFocus(true)}
					onBlur={() => {
						setTimeout(() => {
							setFocus(false);
						}, 300);
					}}
				/>
			</div>

			{movies && movies.length > 0 && hasFocus && (
				<div className="search-results">
					<ul>
						{movies.map((movie: IMovie) => (
							<Link to={`/movies/${movie.id}`} key={movie.id}>
								<li>
									<SearchResultCard movie={movie} />
								</li>
							</Link>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Search;
