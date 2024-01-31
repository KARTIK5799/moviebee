
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { fetchmovies } from '../api/Api';
import Card from '../components/Card/Card';

const Firstpage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchmovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='m-20 gap-2 flex flex-wrap justify-center '>
        {movies.map((movie) => (
          <Link to={`/secondpage/${movie.show.id}`} key={movie.show.id}>
            <div className='w-64 m-4'>
              <Card
                title={movie.show.name}
                description={movie.show.summary}
                genre={movie.show.genres.slice(0, 2).join(', ')}
                stars={movie.show.rating.average !== null ? movie.show.rating.average.toFixed(1) : '0'}
                image={movie.show.image ? movie.show.image.medium : 'https://placehold.it/200x280'}
              />
            </div>
          </Link>
        ))}
      </div>
   
      
    </div>
  );
};

export default Firstpage;
