import React from 'react';
import { Link } from 'react-router-dom';

import './movie-item.styles.scss';

const MovieItem = ({ id, imdbId, title, poster, movieDetail }) => (
  <div className="movie-item">
    <Link
      to={{
        pathname: `/${id}`,
        imdbId: imdbId
      }}
      alt={title}
    >
      <div className="background-image" style={{ backgroundImage: `url(${poster})` }} />
      <div className="title">{title}</div>
    </Link>
  </div>
);

export default MovieItem;
