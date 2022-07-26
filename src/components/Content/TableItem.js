import React from 'react';
import { Image } from 'react-bootstrap';
function TableItem({ country, index }) {
  return (
    <tr key={index}>
      <td width={110}>
        <Image
          rounded
          src={country.flags.png}
          alt=''
          width={100}
          height={60}
        ></Image>
      </td>
      <td className='align-middle'>{country.name}</td>
      <td
        className={
          country.capital ? 'align-middle ' : ' align-middle  text-center'
        }
      >
        {country.capital ? country.capital : '-'}
      </td>
      <td className='align-middle'>{country.region}</td>
    </tr>
  );
}

export default TableItem;
