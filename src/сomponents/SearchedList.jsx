import React from 'react';

export default function SearchedList({ data }) {
  return (
    <>
      {data && (
        <ul>
          {data.map(({ original_title, backdrop_path, vote_average, id }) => (
            <li key={id}>
              <h2>{original_title}</h2>
              <p>Vote: {vote_average}</p>
              <img
                src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
                alt="poster"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
