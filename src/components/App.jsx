import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Menu from './Menu/Menu';
import FilmList from './FilmList/FilmList';
import FilmSearch from './FilmSearch/FilmSearch';
import FilmInfo from './FilmInfo/FilmInfo';
import FilmCast from './FilmCast/FilmCast';
import FilmReviews from './FilmReviews/FilmReviews';

export default function App() {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<FilmList />} />

        <Route path="/movies" element={<FilmSearch />} />

        <Route path="/movies/:filmId" element={<FilmInfo />} />

        <Route
          path="/movies/:filmId/cast"
          element={
            <>
              <FilmInfo />
              <FilmCast />
            </>
          }
        />

        <Route
          path="/movies/:filmId/reviews"
          element={
            <>
              <FilmInfo />
              <FilmReviews />
            </>
          }
        />
      </Routes>
    </>
  );
}
