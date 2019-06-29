import React from 'react';

// A simple functional component to render each individual SearchItem.
// Props - key(unique identifier) && article(each unique article)

const SearchItem = props => {
  return (
    <div className='searchItem'>
      <h4 className='searchItemTitle'>
        <a href={props.article.url} target='_blank' rel='noopener noreferrer'>
          {props.article.title}
        </a>
      </h4>
      <p className='searchItemInfo'>
        {props.article.points} points | {props.article.author} |{' '}
        {props.article.num_comments} comments |{' '}
        {
          <a href={props.article.url} target='_blank' rel='noopener noreferrer'>
            {props.article.url}
          </a>
        }
      </p>
    </div>
  );
};

export default SearchItem;
