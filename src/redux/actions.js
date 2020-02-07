import MoviesService from '../services/movies';

const getAllMovies = () => dispatch => {
  MoviesService.getAllMovies().then(movies => {
    dispatch({
      type: 'ALL_MOVIES_LOADED',
      payload: {
        movies
      }
    });
  });
};

const getMovieDetail = imdbId => dispatch => {
  MoviesService.getMovieDetail(imdbId).then(movieDetail => {
    dispatch({
      type: 'MOVIE_DETAIL_LOADED',
      payload: {
        movieDetail
      }
    });
  });
};

export { getAllMovies, getMovieDetail };
