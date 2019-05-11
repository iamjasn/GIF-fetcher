import React from 'react';
import './fetchedGif.css';

const FetchedGif = ({ title, url, alreadyLiked, disabled, handleLike }) => (
  <section className="searchResult">
    <h2>Your Result</h2>

    <div className="currentGif">
      <h5>{title}</h5>
      <img src={url} title={title} alt={title} />
      <button className="likeButton" onClick={handleLike} disabled={disabled}>
        Like
      </button>
      {alreadyLiked && <p>Enter a new search term</p>}
    </div>

    <div>
      <input type="range" min="0" max="10" id="weirdness" />
      <label htmlFor="weirdness">
        Weirdness:
      </label>
    </div>
  </section>
);

export default FetchedGif;
