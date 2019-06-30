import React from 'react';

// A simple functional component to render the Site header, including the search bar.
// Props - handleChange(a method from App.js that handles the user search query)

// const Header = props => {
//   return (
//     <div className='header'>
//       <h1>HackerNews Clone</h1>
//       <form>
//         <input
//           onChange={props.handleChange}
//           type='text'
//           placeholder='Filter stories by title or author'
//         />
//       </form>

//       <form onSubmit={props.handleNewSearchTerm}>
//         <input
//           id='newSearch'
//           type='text'
//           placeholder='Or search for a new term'
//         />
//       </form>
//     </div>
//   );
// };

const Header = props => {
  if (props.loading === true) {
    return (
      <div className='header'>
        <h1>HackerNews Clone</h1>
        <form>
          <input
            onChange={props.handleChange}
            type='text'
            placeholder='Filter stories by title or author'
          />
        </form>

        <form onSubmit={props.handleNewSearchTerm}>
          <input
            id='newSearch'
            type='text'
            placeholder='Or search for a new term'
          />
        </form>
        <p>Loading new Search term...</p>
      </div>
    );
  } else {
    return (
      <div className='header'>
        <h1>HackerNews Clone</h1>
        <form>
          <input
            onChange={props.handleChange}
            type='text'
            placeholder='Filter stories by title or author'
          />
        </form>

        <form onSubmit={props.handleNewSearchTerm}>
          <input
            id='newSearch'
            type='text'
            placeholder='Or search for a new term'
          />
        </form>
      </div>
    );
  }
};

export default Header;
