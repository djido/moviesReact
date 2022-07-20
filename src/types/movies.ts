export interface IMovie {
	id: number;
	backdrop_path: string;
	poster_path: string;
	title: string;
	genres: IGenre[];
	overview: string;
	release_date: string;
	vote_average: number;
}

interface IGenre {
	id: number;
	name: string;
}
