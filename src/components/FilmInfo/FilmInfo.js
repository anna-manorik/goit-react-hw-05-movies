import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import styles from './styles.module.css';

export default function FilmInfo() {
  const { filmId } = useParams('');
  const [film, setFilm] = useState({});
  const [genresList, setGenresList] = useState([]);
  const navigate = useNavigate();
  const [isRender, setIsRender] = useState(true);

  // let isRender = true;

  async function fetchAPI() {
    const URL = `https://api.themoviedb.org/3/movie/${filmId}?api_key=893305900bfa999f02bdcec91556216a`;

    const filmsApi = await fetch(URL)
      .then(responce => responce.json())
      .then(film => {
        setFilm(film);
        setGenresList(film.genres.map(genre => genre.name));
      })
      .catch(err => {
        setIsRender(false);
      });
  }

  useEffect(() => {
    fetchAPI();
  }, [filmId]);

  return (
    <>
      {isRender ? (
        <>
          <button onClick={() => navigate(-1)}>Go back</button>
          <div className={styles.container}>
            <img
              src={`https://image.tmdb.org/t/p/original/${film.poster_path}?api_key=893305900bfa999f02bdcec91556216a`}
              alt={film.title}
              width="300px"
            />
            <div className={styles.info}>
              <h1>{film.title}</h1>
              <p>
                <b>Popularity:</b> {film.popularity}
              </p>
              <p>
                <b>Overview:</b> {film.overview}
              </p>
              <p>
                <b>Genres:</b> {genresList.join(', ')}
              </p>
            </div>
          </div>
          <hr />

          <div>
            <ul>
              <li>
                <Link to={`/movies/${filmId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${filmId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <hr />
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
