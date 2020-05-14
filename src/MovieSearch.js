import React from 'react'
// import { Link } from 'react-router-dom'

import axios from 'axios'
// import slick from 'slick-carousel'

class MovieSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      poster1: '',
    }
  }
  componentDidMount() {
    axios
      .get('https://movie-database-imdb-alternative.p.rapidapi.com/', {
        headers: {
          'content-type': 'octet/stream',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '3ab72deec2msh1a38cc127a929b8p18fd0bjsn1a104e907491',
        },
        params: {
          s: 'step brothers',
        },
      })
      .then(resp => {
        this.setState({
          // movies: resp.data.Search,
          poster1: resp.data.Search[0].Poster,
          poster2: resp.data.Search[1].Poster,
          poster3: resp.data.Search[2].Poster,
          poster4: resp.data.Search[3].Poster,
        })
        // console.log(resp)
        console.log(resp.data.Search)
        console.log(resp.data.Search[0].Poster)
      })
      .catch(err => console.error(err))
  }

  render() {}
}

export default MovieSearch
