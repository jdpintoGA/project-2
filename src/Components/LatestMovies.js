import React from 'react'
import axios from 'axios'

class LatestMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/latest?api_key=3f28c5c611a8e649594298eef308b64c&language=en-US',
      )
      .then(res =>
        this.setState({
          movies: res.data,
        }),
      )
      .catch(error => console.error(error))
  }

  render() {
    if (!this.state.movies) {
      return <h1>Movie not ready...</h1>
    }
    const { title, runtime, popularity, overview } = this.state.movies
    const poster = this.state.movies.poster_path
    return (
      <section id="flex">
        <div>
          <figure>
            <img
              // src={`https://image.tmdb.org/t/p/w185/${poster}`}
              src="https://vignette.wikia.nocookie.net/harrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest?cb=20140603201724"
              alt="A piece of art"
            />
          </figure>
        </div>
        <div id="flex2">
          <h1 className="title">Movie Title: {title}</h1>
          <h2 className="subtitle">Movie RunTime: {runtime}</h2>
          <h2 className="subtitle">
            Movie Popularity: {popularity} (if 0 it is because it is has not
            been critiqued yet)
          </h2>
          <p>Movie {overview}</p>
        </div>
      </section>
    )
  }
}

export default LatestMovies
