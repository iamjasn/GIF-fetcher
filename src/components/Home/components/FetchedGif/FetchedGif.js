import React from 'react';
import './fetchedGif.css';

const FetchedGif = ({ title, url }) => (
  <section className="searchResult">
    <h2>Your Result</h2>

    <img src={url} title={title} alt={title} />

    <button>Like</button>

    <div>
      <input type="range" id="weirdness" />
      <label htmlFor="weirdness">
        Weirdness:
      </label>
    </div>
  </section>
);

export default FetchedGif;
