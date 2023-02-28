import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Table from './components/Table';
import { Container, Navbar } from 'react-bootstrap';
import Navbars from './components/Navbar';
import Banner  from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <Container fluid className='bg-light'>
     <Container fluid className='p-0'>
            <Navbars />
     </Container>
      <div className='container mt-2'>
        <div className="row g-2">
            <div className='col-12 col-sm-12 col-md-4 col-lg-3'>
                <Table />
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-3'>
                <Table />
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-3'>
                <Table />
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-3'>
                <Table />
            </div>
        </div>
      </div>
      <Container className='mt-2'>
        <Banner btnTitle="Show more" title="Welcome Props" desc="Using a series of utilities, you can create this jumbotron, just like the one in."/>
        <img src="" />
      </Container>
      <Container className='bg-white p-0' fluid>
        <Footer />
      </Container>
      </Container>
  );
}

export default App;
