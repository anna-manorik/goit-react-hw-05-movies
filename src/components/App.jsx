import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
// import FilmList from './FilmList/FilmList';
// import FilmSearch from './FilmSearch/FilmSearch';
// import FilmInfo from './FilmInfo/FilmInfo';
// import FilmCast from './FilmCast/FilmCast';
// import FilmReviews from './FilmReviews/FilmReviews';

const FilmList = lazy(() => import('./FilmList/FilmList.js'));
const FilmSearch = lazy(() => import('./FilmSearch/FilmSearch.js'));
const FilmInfo = lazy(() => import('./FilmInfo/FilmInfo.js'));
const FilmCast = lazy(() => import('./FilmCast/FilmCast.js'));
const FilmReviews = lazy(() => import('./FilmReviews/FilmReviews.js'));

export default function App() {
  return (
    <>
      <Menu />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<FilmList />} />

          <Route path="process.env.PUBLIC_URL + /movies" element={<FilmSearch />} />

          <Route path="process.env.PUBLIC_URL + /movies/:filmId" element={<FilmInfo />} />

          <Route
            path="process.env.PUBLIC_URL + /movies/:filmId/cast"
            element={
              <>
                <FilmInfo />
                <FilmCast />
              </>
            }
          />

          <Route
            path="process.env.PUBLIC_URL + /movies/:filmId/reviews"
            element={
              <>
                <FilmInfo />
                <FilmReviews />
              </>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
