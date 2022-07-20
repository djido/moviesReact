import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IMovie } from '../types/movies';
import { useWindowWidth } from '@react-hook/window-size';

import MovieCard from './MovieCard';

const MovieRow = ({
	posterWidth,
	arrowHeight,
	movies,
}: {
	posterWidth: number;
	arrowHeight: number;
	movies: IMovie[];
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [scrollX, setScrollX] = useState(0);

	const windowWidth = useWindowWidth({
		leading: true,
		wait: 0,
	});

	const handleLeftArrow = useCallback(() => {
		if (ref.current && movies.length) {
			let x = scrollX + Math.round(ref.current.offsetWidth / 2);
			if (x > 0) {
				x = 0;
			}
			setScrollX(x);
		}
	}, [movies, scrollX]);

	const handleRightArrow = useCallback(() => {
		if (ref.current && movies.length) {
			let x = scrollX - Math.round(ref.current.offsetWidth / 1.5);
			const listW = windowWidth > 768 ? movies.length * (posterWidth + 5) : movies.length * (posterWidth / 2 + 5);

			if (ref.current.offsetWidth - listW > x) {
				x = ref.current.offsetWidth - listW;
			}
			setScrollX(x);
		}
	}, [movies, scrollX]);

	return (
		<>
			{movies ? (
				<div className="movie-row" ref={ref}>
					{scrollX !== 0 ? (
						<div
							className="movie-row-left"
							onClick={handleLeftArrow}
							style={{ height: windowWidth > 768 ? `${arrowHeight}px` : `${arrowHeight / 1.5}px` }}
						>
							<FaAngleLeft style={{ fontSize: 50 }} />
						</div>
					) : null}
					<div
						className="movie-row-right"
						style={{ height: windowWidth > 768 ? `${arrowHeight}px` : `${arrowHeight / 1.5}px` }}
					>
						<FaAngleRight style={{ fontSize: 50 }} onClick={handleRightArrow} />
					</div>
					<div className="movie-row-listarea">
						<div
							className="movie-row-list"
							style={{
								marginLeft: scrollX,
								width: windowWidth > 768 ? movies.length * (posterWidth + 5) : movies.length * (posterWidth / 1.5 + 5),
							}}
						>
							{movies.length > 0 &&
								movies.map(movie => (
									<MovieCard
										key={movie.id}
										movie={movie}
										posterWidth={windowWidth > 768 ? posterWidth : posterWidth / 1.5}
									/>
								))}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default MovieRow;
