import axios from 'axios';
import React, { useState, useEffect } from 'react';
import apiConfig from '../api/apiConfig';
import { IVideo } from '../types/videos';
import Video from './Video';

const VideoList = ({ id }: { id: number }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideos = async () => {
			const response = await axios.get(`${apiConfig.baseUrl}/movie/${id}/videos?api_key=${apiConfig.apiKey}`);
			const { results } = response.data;
			setVideos(results.slice(0, 2));
		};
		getVideos();
	}, [id]);

	return (
		<>
			{videos.length ? (
				videos.map((item: IVideo) => <Video key={item.key} item={item} />)
			) : (
				<p>Dodatni sadržaji nisu dostupni.</p>
			)}
		</>
	);
};

export default VideoList;
