const apiConfig = {
	baseUrl: `https://api.themoviedb.org/3`,
	apiKey: `9decf001a5b8db7757abfe267fef77ca`,
	originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w300Image: (imgPath: string) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
};

export default apiConfig;
