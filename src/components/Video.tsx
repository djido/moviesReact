import React, { useRef, useEffect } from 'react';
import { IVideo } from '../types/videos';

const Video = ({ item }: { item: IVideo }) => {
	console.log(item);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		const height = (iframeRef.current!.offsetWidth * 9) / 16 + 'px';
		iframeRef.current!.setAttribute('height', height);
	}, []);

	return (
		<>
			<h4>{item.name}</h4>
			<iframe src={`https://www.youtube.com/embed/${item.key}`} ref={iframeRef} width="100%" title="video"></iframe>
		</>
	);
};

export default Video;
