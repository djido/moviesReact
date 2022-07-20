import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../images/logo.webp';
import Search from './Search';

const Header = () => {
	return (
		<Navbar expand="md" bg="dark" variant="dark" className="primary-background">
			<Container>
				<Navbar.Brand href="/">
					<img className="img-fluid" src={logo} alt="logo" width="65%" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-md-end" id="responsive-navbar-nav">
					<Nav>
						<Nav.Link href="/" className="align-self-md-center">
							Početna
						</Nav.Link>
						<Nav.Link href="/favorites" className="align-self-md-center">
							Favoriti
						</Nav.Link>
						<Nav.Link eventKey={2}>
							<Search />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
