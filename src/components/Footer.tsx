import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<Container>
			<Row className="py-5">
				<Col>
					<p className="text-center">
						© 2022 JustWatch - Vodič kroz platforme za streaming - - All external content remains the property of the
						rightful owner.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
