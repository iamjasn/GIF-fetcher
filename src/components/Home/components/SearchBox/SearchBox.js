import React, { forwardRef } from 'react';
import './SearchBox.css';

const SearchBox = forwardRef((props, ref) => {
  function handleSearchClick(e) {
    e.preventDefault();

    props.onSearchClick(ref.current.value);
  }

  return (
    <section>
      <p>
        Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.
      </p>
      <p>
        When you find a GIF you like, press the <em>Like</em> button. Once you like 5 GIFs, we'll show you how weird you are.
      </p>

      <div>
        <label htmlFor="giphy-search">Search term</label>
        <input type="search" id="giphy-search" ref={ref}></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </section>
  );
});

export default SearchBox;
