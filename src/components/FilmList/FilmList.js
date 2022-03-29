import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FilmList() {
  const [films, setFilms] = useState([]);

  async function fetchAPI() {
    const URL =
      'https://api.themoviedb.org/3/trending/all/day?api_key=893305900bfa999f02bdcec91556216a';

    const filmsApi = await fetch(URL)
      .then(responce => responce.json())
      .then(films => {
        setFilms([...films.results]);
      });
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <p>Trending Films</p>
      <ul>
        {films.map(
          ({ id, title }) =>
            title && (
              <li key={id}>
                <Link to={process.env.PUBLIC_URL + `/movies/${id}`}>{title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
}
