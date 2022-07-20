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
import { IState } from '../types/contextTypes';

const movieReducer = (state: IState, { type, payload }: any) => {
	switch (type) {
		case GET_POPULAR_MOVIES:
			return { ...state, popular: payload };
		case GET_TOP_RATED_MOVIES:
			return { ...state, topRated: payload };
		case FIND_MOVIE:
			return { ...state, movies: payload };
		case REMOVE_MOVIES:
			return { ...state, movies: null };
		case GET_SEARCH_STRING:
			return { ...state, searchString: payload };
		case ADD_FAVORITES: {
			const movieArray = [...state.topRated, ...state.popular];
			const favMovie = movieArray.filter(movie => movie.id === payload);
			const allFavorites = [...favMovie];
			if (state.favorites !== null) {
				allFavorites.push(...state.favorites);
			}
			localStorage.setItem('favorites', JSON.stringify(allFavorites));
			return {
				...state,
				favorites: allFavorites,
			};
		}
		case REMOVE_FAVORITES: {
			const favMovie = state!.favorites!.filter(movie => movie.id !== payload);
			const allFavorites = favMovie;
			if (allFavorites) localStorage.setItem('favorites', JSON.stringify(allFavorites));
			return {
				...state,
				favorites: allFavorites,
			};
		}
		case GET_FAVORITES:
			const favMovies = JSON.parse(localStorage!.getItem('favorites')!);
			return {
				...state,
				favorites: favMovies,
			};

		default:
			return state;
	}
};

export default movieReducer;
