import React from 'react'
import axios from 'axios'
// import ShowModal from './MovieModal'
import SearchForm from './SearchForm'
import MovieCard from './MovieCard'
// import {Link} from 'react-router-dom'

class DisplayMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      query: '',
    }

    this.fetchMovies = this.fetchMovies.bind(this)
  }

  fetchMovies(event) {
    event.preventDefault()
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=77ec028641c2e3e8a7aeefbf47a24816&language=en-US&query=${this.state.query}&page=1`,
      )
      .then(({ data: { results } }) => {
        const filteredMovies = results.filter(movie => {
          const regex = new RegExp(this.state.query, 'i')
          return movie.title.match(regex)
        })
        this.setState({
          movies: filteredMovies,
        })
      })
  }

  render() {
    return (
      <>
        <section className="MoviesIndex">
          {/* { to center later } */}
          <SearchForm
            query={this.state.query}
            onChange={event => this.setState({ query: event.target.value })}
            handleSearch={this.fetchMovies}
          />

          <div className="section">
            <div className="container">
              <div className="columns is-multiline is-mobile">
                {this.state.movies.map((movie, index) => {
                  return <MovieCard key={index} {...movie} />
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default DisplayMovies
