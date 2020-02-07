import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies, getMovieDetail } from '../../redux/actions';

import Header from '../../components/header/header.component';
import MovieItem from '../../components/movie-item/movie-item.component';

import './Home.styles.scss';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  getMovieDetail = imdbId => {
    this.props.getMovieDetail(imdbId);
  };

  render() {
    return (
      <div className="home">
        <Header />
        <div className="jumbotron">
          <div className="heading">All Movies</div>
          <div className="movie-list">
            {this.props.movies.map(movie => (
              <MovieItem key={movie.id} movieDetail={this.getMovieDetail} {...movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  movieDetail: state.main.movieDetail
});

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getMovieDetail: imdbId => dispatch(getMovieDetail(imdbId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
