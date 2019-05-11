import React, { Component } from 'react';
import { connect } from 'react-redux'

import './LikedGifs.css';

const MIN_GIFS = 5;

class LikedGifs extends Component {
  handleCalculate = e => {
  }

  handleUnlike = e => {
  }

  render() {
    return (
      <div>
        <h2>Your Liked GIFs</h2>
        <ul>
          {this.props.liked.map(gif => (
            <li key={gif.id}>
              <div className="gifContainer">
                <h3>{gif.title}</h3>
                <img src={gif.url} alt={`gif of ${gif.title}`} />
                <button onClick={this.handleUnlike} />
              </div>
            </li>
          ))}
        </ul>
        <button disabled={this.props.liked.length < MIN_GIFS} onClick={this.handleCalculate}>
          Calculate My Weirdness Score
        </button>
        { this.props.liked.length < MIN_GIFS &&
          <p>
            You must <em>Like</em> {MIN_GIFS - this.props.liked.length} more GIFs to calculate your score
          </p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    liked: state.gifs.liked
  };
};

export default connect(
  mapStateToProps,
  {}
)(LikedGifs);