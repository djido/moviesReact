import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import MovieState from './context/MovieState';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import Footer from './components/Footer';

const App = () => {
	return (
		<MovieState>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/movies" component={Movies} />
					<Route path="/movies/:id" component={Movie} />
					<Route exact path="/favorites" component={Favorites} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</MovieState>
	);
};

export default App;
