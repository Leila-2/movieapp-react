import React from 'react';

export default function SearchedList({ title, poster, vote, id }) {
  return (
    <li key={id}>
      <h1>Search</h1>
      <h2>{title}</h2>
      <p>Vote: {vote}</p>
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="poster" />
    </li>
  );
}
