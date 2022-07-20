import { IMovie } from './movies';

export interface IState {
	movies: IMovie[] | null;
	popular: IMovie[];
	topRated: IMovie[];
	favorites: IMovie[] | null;
	searchString: string | null;
}

export interface IContext extends IState {
	addToFavorites: (id: number) => void;
	getFavorites: () => void;
	removeFromFavorites: (id: number) => void;
	findMovie: (query: string) => void;
	removeMovies: () => void;
	getPopularMovies: () => void;
	getTopRatedMovies: () => void;
}
