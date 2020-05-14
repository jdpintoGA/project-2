import React from 'react'
// import SearchForm2 from './CompareMovieSearchForm'
import DisplayCompareMovies from './DisplayCompareMovies'
const CompareMovie = () => (
  <main className="compareMovieMain">
    <div className="compareMovieDiv">
      <DisplayCompareMovies />
    </div>
    <div className="compareMovieDiv">
      <DisplayCompareMovies />
    </div>
  </main>
)
export default CompareMovie
