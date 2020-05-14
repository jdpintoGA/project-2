import React from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

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
        'https://api.themoviedb.org/3/movie/now_playing?api_key=3f28c5c611a8e649594298eef308b64c&language=en-US&page=1',
      )
      .then(res => {
        this.setState({ movies: res.data.results })
      })
      .catch(error => console.error(error))
  }

  render() {
    console.log(this.state.movies)
    if (!this.state.movies) {
      return <h1>Movies not ready...</h1>
    }
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {this.state.movies.map((movie, i) => {
              return <MovieCard key={i} {...movie} />
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default LatestMovies
