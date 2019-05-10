import React, { Component, Fragment, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchGif } from "../../actions/actions";

import SearchBox from "./components/SearchBox/SearchBox";
import FetchedGif from "./components/FetchedGif/FetchedGif";
import LikedGifs from "./components/LikedGifs/LikedGifs";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleCalculateClick = this.handleCalculateClick.bind(this);
    this.ref = createRef();
  }

  handleSearchClick(searchTerm) {
    const { fetchGif, weirdness } = this.props;
    fetchGif(searchTerm, weirdness);
  }

  handleCalculateClick(e) {
    e.preventDefault();

    console.log(e);
  }

  render() {
    return (
      <Fragment>
        <SearchBox onSearchClick={this.handleSearchClick} ref={this.ref} />
        <FetchedGif url={this.props.current.url} title={this.props.current.title} />
        <LikedGifs />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  current: state.gifs.current,
  searchTerm: state.gifs.searchTerm,
  weirdness: state.gifs.weirdness
});

Home.propTypes = {
  weirdness: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  { fetchGif }
)(Home);
