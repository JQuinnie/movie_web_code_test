import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../redux/actions';

import Header from '../../components/header/header.component';
import MovieDetail from '../../components/movie-detail/movie-detail.component';

import './Detail.styles.scss';

class Detail extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
      this.props.history.goBack();
  }

  componentDidMount() {
    const { imdbId } = this.props.location;
    const { getMovieDetail } = this.props;
    getMovieDetail(imdbId);
  }

  render() {
    const { movieDetail } = this.props;

    return (
      <div className="detail">
        <Header />
        <div className="container-fluid">
          <div className="jumbotron">
              <button type="button" className="btn btn-info" onClick={this.goBack}>Back to Results</button>
              <MovieDetail imdbId={this.props.location.imdbId} {...movieDetail} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieDetail: state.main.movieDetail
});

const mapDispatchToProps = dispatch => ({
  getMovieDetail: imdbId => dispatch(getMovieDetail(imdbId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

// TODO: store History into state so goBack in History can be accessed
// TODO: button styling on hover
