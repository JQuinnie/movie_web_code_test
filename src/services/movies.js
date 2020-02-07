const MoviesService = {
  getAllMovies: () =>
    fetch('http://localhost:3001/movies/all').then(function(response) {
      return response.json();
    }),
  getMovieDetail: imdbId =>
    fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=c32d368e`).then(function(response) {
      return response.json();
    })
};

export default MoviesService;
