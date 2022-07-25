import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
function DarkExample() {
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
          <tr>
            <td width={120}>
              <Image
                rounded
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                alt=''
                width={100}
                height={60}
              ></Image>
            </td>
            <td className='align-middle'>Mark</td>
            <td className='align-middle'>Otto</td>
            <td className='align-middle'>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default DarkExample;
