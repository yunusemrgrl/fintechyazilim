import { useRef } from 'react';
import { useCountries } from '../../context/services';

function Search() {
  const { search, setSearch, capital, setCapital } = useCountries();
  const inputRef = useRef();

  return (
    <div className=' d-flex justify-content-center'>
      <div
        className=' my-3 position-relative rounded-4 d-flex align-center '
        style={{ backgroundColor: 'white', width: '360px' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-search position-absolute top-50 mx-4 translate-middle '
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
        <input
          className=' border-0 px-3 mx-5 py-2 '
          type='text'
          ref={inputRef}
          value={search}
          placeholder={capital ? 'Search by capital..' : 'Search All'}
          style={{ width: '300px', outline: 'none' }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button
        type='checkbox'
        className={
          capital ? 'btn btn-light mx-5 my-3' : 'btn btn-dark mx-5 my-3'
        }
        onClick={(e) => setCapital(!capital)}
      >
        Capital
      </button>
    </div>
  );
}

export default Search;
