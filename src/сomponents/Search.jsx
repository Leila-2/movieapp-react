import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../services/movie-api';
import SearchedList from './SearchedList';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!query) return;
    getMovie(query).then((res) => {
      if (!res) {
        return <p>`There's no match to ${query}`</p>;
      }
      setMovie(res.data.results);
    });
  }, [query]);

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

  console.log(movies);
  return (
    <div>
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
      <SearchedList data={movies} />
    </div>
  );
}
