import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='d-flex justify-content-between align-middle px-5'
    >
      <Navbar.Brand href='/'>World Capitals</Navbar.Brand>
      <Nav>
        <Button variant='outline-light'>Light</Button>
      </Nav>
    </Navbar>
  );
}

export default CollapsibleExample;
