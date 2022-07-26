import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className='bg-secondary h-100'>
      <Navbar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
