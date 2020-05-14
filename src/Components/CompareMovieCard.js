import React from 'react'

const CompareMovieCard = ({
  title,
  release_date,
  poster_path,
  popularity,
  vote_count,
  vote_average,
}) => {
  return (
    <div className="column ">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img
              src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
              alt={title}
            />
          </figure>
          <div className="card-content">
            <h5 className="title">{release_date}</h5>
            <h5 className="subtitle">Popularity - {popularity}</h5>
            <h5 className="subtitle">N˚ of Votes - {vote_count}</h5>
            <h5 className="subtitle">Average N˚ of Votes - {vote_average}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareMovieCard
