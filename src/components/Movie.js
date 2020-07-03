import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom'

function Movie({ title, year, summary, poster, genres, synopsis, rating }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src={poster} alt={title} title={title} />
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p>{genres.map((genre, index) => {
                        return (
                            <span key={index} className="badge badge-success movie__genre">{genre}</span>
                        );
                    })}
                    </p>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                    <Link
                        to={{
                            pathname: '/movie-detail',
                            state: { year, title, summary, poster, genres, synopsis, rating },
                        }}
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-sm btn-block btn-outline-secondary">View</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>


    );
}

Movie.proTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;