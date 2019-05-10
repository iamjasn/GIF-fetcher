import React, { Component } from 'react';
import { connect } from 'react-redux'

import './LikedGifs.css';

class LikedGifs extends Component {
  handleCalculate = e => {
    this.props.viewResults();
  }

  handleUnlike = e => {
    // dispatch unlike(gif)
  }

  render() {
    return (
      <div>
        <h2>Your Liked GIFs</h2>
        <ul>
          {this.props.likedGifs.map(gif => (
            <li>
              <div className="gifContainer">
                <h3>{gif.title}</h3>
                <img src={gif.url} alt={`gif of ${gif.title}`} />
                <button onClick={this.handleUnlike} />
              </div>
            </li>
          ))}
        </ul>
        <button onClick={this.handleCalculate}>Calculate My Weirdness Score</button>
        <p>You must <em>Like</em> more GIF to calculate your score</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likedGifs: state.gifs.liked
  };
};

export default connect(
  mapStateToProps,
  {}
)(LikedGifs);