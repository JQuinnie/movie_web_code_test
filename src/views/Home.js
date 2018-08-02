import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from './state/actions'

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }

  render() {
    return (
      <div>
        <h1 className="title">Home</h1>
        { this.props.movies.map(movie => {
          return (<div>{movie.title}</div>)
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
