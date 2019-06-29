import React from 'react';

// A simple functional component to render the Site header, including the search bar.
// Props - handleChange(a method from App.js that handles the user search query)

const Header = props => {
  return (
    <div className='header'>
      <h1>HackerNews Clone</h1>
      <form>
        <input
          onChange={props.handleChange}
          type='text'
          placeholder='Search stories by title or author'
        />
      </form>
    </div>
  );
};

export default Header;
