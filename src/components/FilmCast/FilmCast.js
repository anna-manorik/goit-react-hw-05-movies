import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FilmCast() {
  const { filmId } = useParams('');
  const [castList, setCastList] = useState([]);

  async function fetchAPI() {
    const URL = `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=893305900bfa999f02bdcec91556216a`;

    const filmsApi = await fetch(URL)
      .then(responce => responce.json())
      .then(credits => {
        setCastList([...credits.cast]);
      });
  }

  useEffect(() => {
    fetchAPI();
  }, [filmId]);

  return (
    <>
      <p>'CAST'</p>
      <ul>
        {castList.map(cast => (
          <>
            <li>
              <img
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}?api_key=893305900bfa999f02bdcec91556216a`}
                alt={cast.name}
                width="100px"
              />
              <p>Actor: {cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
}
