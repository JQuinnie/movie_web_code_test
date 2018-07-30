import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './state/simpleAction'

class Home extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>
        <h1 className="title">Home</h1>
        <pre>
          {
            JSON.stringify(this.props.simpleReducer)
          }
        </pre>
        <button onClick={this.simpleAction}>Test Redux</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
