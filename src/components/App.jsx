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
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound.js'));

export default function App() {
  return (
    <>
      <Menu />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<FilmList />} />

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

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
