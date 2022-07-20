import React from 'react';

import { Link } from 'react-router-dom';

import FlixOle from '../images/flix.webp';
import GoogleIcon from '../images/google-icon.webp';
import IviIcon from '../images/ivi-icon.webp';
import NetflixIcon from '../images/netflix-icon.webp';
import PrimeIcon from '../images/prime-icon.webp';

const IconRow = () => {
	return (
		<div className="icon-row d-flex">
			<Link to="/movies">
				<img src={NetflixIcon} className="img-fluid rounded px-1" alt="netflix" />
			</Link>
			<Link to="/movies">
				<img src={PrimeIcon} className="img-fluid rounded px-1" alt="prime" />
			</Link>
			<Link to="/movies">
				<img src={IviIcon} className="img-fluid rounded px-1" alt="ivi" />
			</Link>
			<Link to="/movies">
				<img src={GoogleIcon} className="img-fluid rounded px-1" alt="google play" />
			</Link>
			<Link to="/movies">
				<img src={FlixOle} className="img-fluid rounded px-1" alt="flix ole" />
			</Link>
		</div>
	);
};

export default IconRow;
