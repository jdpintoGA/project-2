import React from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import Slider from 'react-slick'

class SlickCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      slickPoster1: '',
      slickPoster2: '',
      slickPoster3: '',
      slickPoster4: '',
      slickPoster5: '',
      slickPoster6: '',
      slickPoster7: '',
      slickPoster8: '',
      slickPoster9: '',
      slickPoster10: '',
    }
  }
  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=77ec028641c2e3e8a7aeefbf47a24816&language=en-US&page=1',
      )
      .then(resp => {
        this.setState({ slickPoster1: resp.data.results[0].poster_path })
        this.setState({ slickPoster2: resp.data.results[1].poster_path })
        this.setState({ slickPoster3: resp.data.results[2].poster_path })
        this.setState({ slickPoster4: resp.data.results[3].poster_path })
        this.setState({ slickPoster5: resp.data.results[4].poster_path })
        this.setState({ slickPoster6: resp.data.results[5].poster_path })
        this.setState({ slickPoster7: resp.data.results[6].poster_path })
        this.setState({ slickPoster8: resp.data.results[7].poster_path })
        this.setState({ slickPoster9: resp.data.results[8].poster_path })
        this.setState({ slickPoster10: resp.data.results[9].poster_path })
        // console.log(resp.data.results[0].poster_path)
      })
      .catch(err => console.error(err))
  }

  render() {
    // // const movies = this.state.movies
    const poster1 = this.state.slickPoster1
    const poster2 = this.state.slickPoster2
    const poster3 = this.state.slickPoster3
    const poster4 = this.state.slickPoster4
    const poster5 = this.state.slickPoster5
    const poster6 = this.state.slickPoster6
    const poster7 = this.state.slickPoster7
    const poster8 = this.state.slickPoster8
    const poster9 = this.state.slickPoster9
    const poster10 = this.state.slickPoster10
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    }
    return (
      <section>
        <div>
          <Slider {...settings}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster1}`}
                alt="A piece of art"
              />
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster2}`}
                alt="A piece of art"
              />
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster3}`}
                alt="A piece of art"
              />
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster4}`}
                alt="A piece of art"
              />
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster5}`}
                alt="A piece of art"
              />
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster6}`}
                alt="A piece of art"
              />
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}
export default SlickCarousel

//step brothers
//avengers
//inception
//sonic the hedgehog
//emma lkb
//shazam
