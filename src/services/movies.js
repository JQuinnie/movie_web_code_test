
const MoviesService = {
  getAllMovies: () => fetch('http://example.com/movies.json')
      .then(function(response) {
        return response.json();
      })
}

export default MoviesService;
