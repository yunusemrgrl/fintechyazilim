import { useEffect, useRef, useState } from 'react';
import { useCountries } from '../../context/services';

function Search() {
  const { setFilteredCapital, filteredCapital } = useCountries();
  const Input = useRef();

  return (
    <div className='d-flex justify-content-center mt-4 '>
      <input
        className='rounded-4 border-0 px-3 py-2 '
        type='text'
        ref={Input}
        value={filteredCapital}
        placeholder='Search by capital..'
        style={{ width: '300px', outline: 'none' }}
        onChange={(e) => setFilteredCapital(e.target.value)}
      />
    </div>
  );
}

export default Search;
