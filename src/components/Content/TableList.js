import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';

import { useCountries } from '../../context/services';
function TableList() {
  const { countries, filteredCapital } = useCountries();
  console.log(filteredCapital);
  return (
    <Container>
      <Table striped bordered hover variant='dark' className='mt-5' size='sm'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
            <th> Region</th>
          </tr>
        </thead>
        <tbody>
          {!countries && (
            <tr>
              <td colSpan={4}>Loading..</td>
            </tr>
          )}
          {countries &&
            countries.map((country, index) => (
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
                    country.capital
                      ? 'align-middle '
                      : ' align-middle  text-center'
                  }
                >
                  {country.capital ? country.capital : '-'}
                </td>
                <td className='align-middle'>{country.region}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableList;
