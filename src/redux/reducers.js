const initialState = {
  movies: [],
  movieDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
      return {
        movies: action.payload.movies
      };
    case 'MOVIE_DETAIL_LOADED':
      return {
        movieDetail: action.payload.movieDetail
      };
    default:
      return state;
  }
};
