import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FilmReviews() {
  const { filmId } = useParams('');
  const [reviewsList, setReviewsList] = useState([]);

  async function fetchAPI() {
    const URL = `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=893305900bfa999f02bdcec91556216a`;

    const filmsApi = await fetch(URL)
      .then(responce => responce.json())
      .then(reviews => {
        setReviewsList([...reviews.results]);
      });
  }

  useEffect(() => {
    fetchAPI();
  }, [filmId]);

  return (
    <>
      <p>'REVIEWS'</p>
      <ul>
        {reviewsList.length > 0
          ? reviewsList.map(review => (
              <li>
                <p>
                  <b>Autor: {review.author}</b>
                </p>
                <p>{review.content}</p>
              </li>
            ))
          : 'This fiml have not any reviews'}
      </ul>
    </>
  );
}
