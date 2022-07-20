import React, { useReducer, createContext } from 'react';

import axios from 'axios';

import apiConfig from '../api/apiConfig';
import MovieReducer from './MovieReducer';

import {
	ADD_FAVORITES,
	GET_FAVORITES,
	FIND_MOVIE,
	GET_SEARCH_STRING,
	REMOVE_FAVORITES,
	REMOVE_MOVIES,
	GET_POPULAR_MOVIES,
	GET_TOP_RATED_MOVIES,
} from '../types/actionTypes';
import { IContext } from '../types/contextTypes';

export const MovieContext = createContext<IContext>({} as IContext);

const MovieState = ({ children }: { children: JSX.Element }) => {
	const initialState = {
		popular: [],
		topRated: [],
		movies: null,
		favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')!) : [],
		searchString: null,
	};

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const addToFavorites = (id: number) => {
		dispatch({
			type: ADD_FAVORITES,
			payload: id,
		});
	};

	const removeFromFavorites = (id: number) => {
		dispatch({
			type: REMOVE_FAVORITES,
			payload: id,
		});
	};

	const getFavorites = () => {
		dispatch({
			type: GET_FAVORITES,
		});
	};

	const removeMovies = () => {
		dispatch({
			type: REMOVE_MOVIES,
		});
	};

	const getPopularMovies = async () => {
		const response = await axios.get(
			`${apiConfig.baseUrl}/movie/popular?api_key=${apiConfig.apiKey}&language=en-US&page=1`,
		);
		const { results } = response.data;

		dispatch({
			type: GET_POPULAR_MOVIES,
			payload: results,
		});
	};

	const getTopRatedMovies = async () => {
		const response = await axios.get(
			`${apiConfig.baseUrl}/movie/top_rated?api_key=${apiConfig.apiKey}&language=en-US&page=1`,
		);
		const { results } = response.data;

		dispatch({
			type: GET_TOP_RATED_MOVIES,
			payload: results,
		});
	};

	const setSearchString = (query: string) => {
		dispatch({
			type: GET_SEARCH_STRING,
			payload: query,
		});
	};

	const findMovie = async (query: string) => {
		if (!query.trim().length) {
			setSearchString('');
			removeMovies();
			return;
		}
		setSearchString(query);
		const response = await axios.get(`${apiConfig.baseUrl}/search/movie`, {
			params: { sort_by: 'created_at.asc', query: query, api_key: apiConfig.apiKey },
		});

		const { results } = response.data;

		dispatch({
			type: FIND_MOVIE,
			payload: results.slice(0, 4),
		});
	};

	return (
		<MovieContext.Provider
			value={{
				movies: state.movies,
				popular: state.popular,
				topRated: state.topRated,
				favorites: state.favorites,
				searchString: state.searchString,
				addToFavorites,
				getFavorites,
				removeFromFavorites,
				findMovie,
				removeMovies,
				getPopularMovies,
				getTopRatedMovies,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieState;
