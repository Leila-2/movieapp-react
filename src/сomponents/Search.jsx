import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../services/movie-api';
import MoviesList from './MoviesList';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('query')) return;
    getMovie(searchParams.get('query'))
      .then((res) => res.data.results)
      .then((res) => {
        if (!res) {
          return Promise.reject(
            new Error(
              `There's no movie starts with ${searchParams.get('query')}`
            )
          );
        }
        setMovie(res);
      })
      .catch((error) => console.log(error));
  }, [searchParams]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    query.trim() === ''
      ? console.log('There is no query')
      : setSearchParams({ query: query });

    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie"
          autoFocus
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList data={movies} />
    </>
  );
}
