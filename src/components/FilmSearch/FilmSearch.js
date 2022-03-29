import React, { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';

export default function FilmSearch() {
  const [input, setInput] = useState('');
  const [searchFilmList, setSearchFilmList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  async function fetchAPI() {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=893305900bfa999f02bdcec91556216a&query=${input}`;

    const filmsApi = await fetch(URL)
      .then(responce => responce.json())
      .then(films => {
        setSearchFilmList([...films.results]);

        navigate({
          search: createSearchParams({
            query: `${input}`,
          }).toString(),
        });
      });
  }

  const handleChange = e => setInput(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    fetchAPI();
  };

  useEffect(() => {
    if (searchFilmList.length > 0) {
      localStorage.setItem('searchFilmList', JSON.stringify(searchFilmList));
    }
  }, [searchFilmList]);

  return (
    <>
      <p>Film Search</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter film name" onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>

      <ul>
        {localStorage.getItem('searchFilmList') && location.search !== ''
          ? JSON.parse(localStorage.getItem('searchFilmList')).map(
              ({ id, title }) => (
                <li key={id}>
                  <Link to={process.env.PUBLIC_URL + `/movies/${id}`}>{title}</Link>
                </li>
              )
            )
          : null}
      </ul>
    </>
  );
}
