import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

//edf4b926

const API_URL = 'https://www.omdbapi.com?apikey=27c9ada5';

// const movie1 = {
//   Title: 'Amazing Spiderman Syndrome',
//   Year: '2012',
//   imdbID: 'tt2586634',
//   Type: 'movie',
//   Poster: 'N/A',
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('spider-man');
  }, []);

  return (
    <div className="app">
      <h1>Movie library</h1>

      <div className="search">
        <input
          placeholder="Search Movies. . ."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <h2>No movies found</h2>
      )}
    </div>
  );
};

export default App;
