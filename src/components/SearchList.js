import React from 'react';
import SearchItem from './SearchItem';

// A functional component to render the filtered or default search data.
// Props - hits(the total and complete array of articles) && filtered(the articles that match the search data)

const SearchList = props => {
  // Conditional Render - Check to see if the 'filtered' array from App.js state has any items. (Indicating user is searching).
  // If the filtered array has items, only render the data that is being matched.
  // Else - The list is not being filtered, so display all results currently stored in 'hits' array from App.js state.
  if (props.filtered.length > 0) {
    return (
      <div className='searchList'>
        {props.filtered.map(article => (
          <SearchItem key={article.title} article={article} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='searchList'>
        {props.hits.map(article => (
          <SearchItem key={article.title} article={article} />
        ))}
      </div>
    );
  }
};

export default SearchList;
