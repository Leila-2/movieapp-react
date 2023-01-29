import React, { useEffect, useState } from 'react';
import { getTrends } from '../services/movie-api';
export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrends().then((res) => setMovieList(res.data.results));
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      {movieList && (
        <ul>
          {movieList.map(({ id, title, poster_path, vote_average }) => (
            <li key={id}>
              <p>{title}</p>
              <p>Estimate: {vote_average}</p>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt="poster"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
