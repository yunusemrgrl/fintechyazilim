import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import { useCountries } from '../../context/services';
import TableItem from './TableItem';
function TableList() {
  const { loading, filteredCountries } = useCountries();
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
          {loading && (
            <tr>
              <td colSpan={4}>Loading..</td>
            </tr>
          )}
          {!loading &&
            filteredCountries.length > 0 &&
            filteredCountries.map((country, index) => (
              <TableItem country={country} key={index} />
            ))}
          {!loading && filteredCountries.length === 0 && (
            <tr>
              <td colSpan={4}>Eşleşme Bulunamadı.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableList;
