import React from 'react';

function Search() {
  return (
    <div className='d-flex justify-content-center mt-4 '>
      <input
        className='rounded-4 border-0 px-3 py-2 '
        type='text'
        placeholder='Search..'
        style={{ width: '300px', outline: 'none' }}
      />
    </div>
  );
}

export default Search;
