# Movie Web Code Test

This code test will evaluate your abilities to develop a React+Redux application, using web technologies such as Javascript, HTML5, and CSS3.

The test consists of a using the bootstrapped app to develop against the provided mocks. The mockups serve as a guide for the user experience. You must turn the static mocks into a working SPA by by following the instructions below.

For this application, you will be building a UI for viewing movies and related features. You will utilize a local server for movie search and the [OMDb API](http://www.omdbapi.com/), which is a RESTful web service to obtain movie information, to get movie details.

## Getting Started

### Pre-Requisites
- An IDE, such as WebStorm, VIM or Atom
- Node v8.11.1 or higher
- GIT installed locally
- Any learning resources you have at your disposal --google, books, etc.

### Project Setup

Setup movie server:
1. Navigate to server directory:
    >```cd server```
2. Install node dependencies:
    >```npm install```
3. Run the server:
    >```npm run server```
4. Verify server running: http://localhost:3001/movies/all

Setup movie app:
1. Install node dependencies:
    >```npm install```
2. Run the server:
    >```npm start```
3. Test the site in a browser by going to http://localhost:3000

### User Stories
Use the [comps](src/web_test_comps.pdf) `src/web_test_comps.pdf` as a guide for the html and user experience for each story.

Search: `http://localhost:3001/movies/search?s=[term]`

API Key: `c32d368e` Use this key on all OMDb movie details requests.
Movie Details: `http://www.omdbapi.com/?i=[imdbID]&apikey=c32d368e`

- As a consumer, I would like to be able to browse a list of movies based on my search.
    - Acceptance Criteria:
        - The Movie List view should be served from the default route ```http://localhost:3000/```
        - Search input field and submit button.
        - The Movies data should be retrieved from the following REST endpoint ```http://localhost:3001/movies/search?s=[term]```
        - Each Movie element displays it's poster and movie name in the list.
        - Each of the Movies displayed in the list should link to Movies detail view (see below).
        <br>

- As a consumer, I would like to click on a Movie from the list view and see its full contents.
    - Acceptance Criteria:
        - The Movie contents view should be served from the route ```http://localhost:3000/{movieId}```
        - The Movie contents be retrieved from the following REST endpoint ```http://www.omdbapi.com/?i=[imdbID]&apikey=c32d368e```

        <br>

- As a consumer, I would like to sort the Movie list by genre.
    - Acceptance Criteria:
        - Select input with genre options.
        - List updates according to selected option.

        <br>

- As a consumer, I would like to see additional information about a Movie when I hover over in the Movie list.
    - Acceptance Criteria:
        - Movie name
        - Movie year
        - (ignore rating)
