import React, { useEffect, useState } from 'react';
import { getTrends } from '../services/movie-api';
import MoviesList from './MoviesList';
export default function Trends() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrends().then((res) => setMovieList(res.data.results));
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <MoviesList data={movieList} />
    </div>
  );
}
