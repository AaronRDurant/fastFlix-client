import React from 'react';
import PropTypes from 'prop-types';

import {
	Button,
	Card
} from 'react-bootstrap';

import { Link } from "react-router-dom";

import './movie-card.scss';

export class MovieCard extends React.Component {
	render() {
		const { movie, onClick } = this.props;
		
		return (
			<Card style={{ width: '16rem' }} className="movie-card mt-3 border border-dark rounded">
				<Card.Img variant="top" src={movie.ImagePath} style={{ height: '26rem' }} className="movie-card-image" />
				<Card.Body>
					<Card.Title>{movie.Title}</Card.Title>
					<Card.Text>{movie.Description}</Card.Text>
					<Link to={`/movies/${movie._id}`}>
						<Button variant="link">More</Button>
					</Link>
				</Card.Body>
			</Card>
		);
	}
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		ImagePath: PropTypes.string.isRequired,
		Genre: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Description: PropTypes.string.isRequired
		}),
		Director: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Bio: PropTypes.string.isRequired,
			Birth: PropTypes.string.isRequired,
			Death: PropTypes.string
		})
	})
};
