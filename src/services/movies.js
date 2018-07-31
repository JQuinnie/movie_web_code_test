
const MoviesService = {
  getAllMovies: () => fetch('http://www.omdbapi.com/?s=action&apikey=c32d368e')
      .then(function(response) {
        return response.json();
      })
}

export default MoviesService;
