import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { fetchmovies } from "../api/Api";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

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
    <div className="dark:bg-gray-700">
      <Navbar />
      <div className="m-17 p-32  flex flex-wrap justify-center ">
        {movies.map((movie) => (
          <Link to={`/secondpage/${movie.show.id}`} key={movie.show.id}>
            <div className="w-64 m-4">
              <Card
                title={movie.show.name}
                description={movie.show.summary}
                genre={movie.show.genres.slice(0, 2).join(", ")}
                stars={
                  movie.show.rating.average !== null
                    ? movie.show.rating.average.toFixed(1)
                    : "0"
                }
                image={
                  movie.show.image
                    ? movie.show.image.medium
                    : "https://placehold.it/200x280"
                }
              />
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Firstpage;
