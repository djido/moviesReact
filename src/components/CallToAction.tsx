import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.webp';
import Button from './Button';

const CallToAction = () => {
	const history = useHistory();

	return (
		<Container>
			<Row className="justify-content-center py-5">
				<Col xs={12} md={6}>
					<img className="img-fluid mx-auto d-block" src={logo} alt="logo" />
					<div className="text-center py-4">
						<h2 className="fw-bold py-4 px-5">
							Na jednom mjestu dobijte preporuke sa svih svojih omiljenih platformi za streaming
						</h2>
						<Button onClick={() => history.push('/movies')} backgroundColor="#FBC500" color="black" marginRight="1em">
							Otkrijte filmove
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default CallToAction;
