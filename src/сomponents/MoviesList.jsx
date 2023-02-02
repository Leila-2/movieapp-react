import React from 'react';

export default function MoviesList({ data }) {
  return (
    <>
      {data.length !== 0 ? (
        <ul>
          {data.map(({ id, title, poster_path, vote_average }) => (
            <li key={id}>
              <h2>{title}</h2>
              <p>Estimate: {vote_average}</p>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt="poster"
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>There is no movies :/</h2>
      )}
    </>
  );
}
