import { useRef } from 'react';
import { useCountries } from '../../context/services';

function Search() {
  const { search, setSearch } = useCountries();
  const inputRef = useRef();

  return (
    <div className='d-flex justify-content-center mt-4 '>
      <input
        className='rounded-4 border-0 px-3 py-2 '
        type='text'
        ref={inputRef}
        value={search}
        placeholder='Search by capital..'
        style={{ width: '300px', outline: 'none' }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
