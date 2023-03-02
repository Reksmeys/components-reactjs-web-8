import logo from './logo.svg';
import './App.css';
import './style.css';
import Table from './components/Table';
import { Container, Navbar } from 'react-bootstrap';
import Navbars from './components/Navbar';
import Banner  from './components/Banner';
import Footer from './components/Footer';
import Cards from './components/Cards';
import LoadingView from './components/LoadingView';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [moviesData, setMovies] = useState([])

    const fetchMovies = () => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2')
      .then(res => res.json())
      .then(response => {
          setLoading(false)
          setMovies(response.results)
      })
  }
    // The same as componentDidMount, Render
    useEffect(() => {
      // call function to get data from APIs
      fetchMovies()
      // console.log(movies);
    }, [])

  return (
    <Container fluid className='bg-light'>
     <Container fluid className='p-0'>
            <Navbars />    
     </Container>
      <div className='container mt-2'>
        <div className="row g-3">
          {
            loading ? <LoadingView /> : <Cards movies={moviesData} title="Little Kid" />
          }
            
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
