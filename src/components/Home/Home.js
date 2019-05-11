import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchGif, likeGif } from "../../actions/actions";

import SearchBox from "./components/SearchBox/SearchBox";
import FetchedGif from "./components/FetchedGif/FetchedGif";
import LikedGifs from "./components/LikedGifs/LikedGifs";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  handleSearchClick = searchTerm => {
    const { fetchGif, weirdness } = this.props;
    fetchGif(searchTerm, weirdness);
  };

  handleCalculateClick = e => {
  };

  handleLikeClick = () => {
    const { current, searchTerm, liked, likeGif } = this.props;
    likeGif(current, searchTerm, liked);
  }

  render() {
    return (
      <section className="homeContainer">
        <div className="leftColumn">
          <SearchBox onSearchClick={this.handleSearchClick} ref={this.ref} />
          <span className="error">{this.props.error}</span>
          <FetchedGif
            url={this.props.current.url}
            title={this.props.current.title}
            handleLike={this.handleLikeClick}
            disabled={!this.props.current.id || this.props.alreadyLiked}
            alreadyLiked={this.props.alreadyLiked}
          />
        </div>
        <div className="rightColumn">
          <LikedGifs />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  current: state.gifs.current,
  searchTerm: state.gifs.searchTerm,
  weirdness: state.gifs.weirdness,
  liked: state.gifs.liked,
  alreadyLiked: !!state.gifs.liked.filter(
    gif => gif.searchTerm === state.gifs.searchTerm
  ).length,
  error: state.gifs.error
});

Home.propTypes = {
  current: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  weirdness: PropTypes.number.isRequired,
  alreadyLiked: PropTypes.bool.isRequired,
  liked: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { fetchGif, likeGif }
)(Home);
