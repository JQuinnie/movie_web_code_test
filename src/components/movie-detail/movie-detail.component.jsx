import React from 'react';

import './movie-detail.styles.scss';

const MovieDetail = ({ imdbId, ...movieDetail }) => (
  <div className="container">
    <div className="poster-image" style={{ backgroundImage: `url(${movieDetail.Poster})` }} />
    <div className="movie-detail">
      <div className="movie-detail-header">
        <div className="title">
          {movieDetail.Title} - ({movieDetail.Year})
        </div>
        <div className="rating">{movieDetail.imdbRating} / 10</div>
      </div>
      <div className="movie-detail-sub-header">{movieDetail.Rated} | {movieDetail.Runtime} | {movieDetail.Genre} | {movieDetail.Released}</div>
      <div className="sub-header">Plot</div>
      <div className="sub-content">{movieDetail.Plot || 'PLOT'}</div>
      <div className="sub-header">Director</div>
      <div className="sub-content">{movieDetail.Director || 'Director'}</div>
      <div className="sub-header">Actors</div>
      <div className="sub-content">{movieDetail.Actors || 'Actors'}</div>
      <div className="sub-header">IMDB ID</div>
      <div className="sub-content">{imdbId || 'IMDB ID'}</div>
    </div>
  </div>
);

export default MovieDetail;

// TODO: Refactor and deconstruct movieDetail props
// TODO: Persist data on page refresh
