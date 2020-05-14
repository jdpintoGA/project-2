### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# JJDB 🎥

Made by [Jamie Maxwell](https://github.com/Jamie66m) and [Joao Pinto](https://github.com/jdpintoGA)

## Overview

[Check out <strong>JJDB</strong> here](http://jamie66m.github.io/project-2/)

JJDB is a front-end web application built using React and a public API, allowing users to search for and compare their favourite movies. This was my second project at General Assembley and by the start of the project we had moved on from just 'vanilla' JavaScript, HTML and CSS to incorporating npm, webpack, babel and front-end frameworks and libraries.

Joao and myself both decided quickly that we wanted to do a movie inspired app due to our shared passion in movies. We wanted to create an app where we could incorporate new features that we hadn't yet learn't in the classroom and make it look visually appealing to a user.

## The Brief

The app should:

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - At least one classical and one functional.
- **The app should include a router** - with several "pages".
- Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
- **Be deployed online** and accessible to the public.

## Technologies Used

| Category                            | List                                        |
| ----------------------------------- | ------------------------------------------- |
| Languages                           | Javascript (ECMAScript6), CSS3, Sass, HTML5 |
| Front-end Web Application Framework | React.js                                    |
| Front-end Libraries                 | Axios, Slick, Proptypes                     |
| Server Environment                  | Node.js                                     |
| CSS Framework                       | Bulma                                       |
| REST client                         | Insomnia                                    |
| Typefaces                           | Font Awesome                                |
| Module Bundler                      | Webpack                                     |
| Text Editor                         | VS Code                                     |
| Browser                             | Chrome                                      |
| Version control                     | Git and GitHub                              |

## Approach Taken

### The Router

The app utilises the React Router `<BrowserRouter>` to keep the UI in sync with the URL, this is done by the means of HTML-5 History API. As this was going to be a multi-page application it was important to get our paths right. We quickly decided that we only wanted to created paths from the homepage due to the time limit.

In order to keep our code clean, not repitive and for a better UI we kept the `<NavBar>` component outside of the `<Switch>` component

```js
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/CompareMovie" component={CompareMovie} />
      <Route path="/SearchMovie" component={SearchMovie}></Route>
      <Route path="/LatestMovies" component={LatestMovies}></Route>
      <Route path="/NowPlaying" component={NowPlaying}></Route>
      <Route path="/Popular" component={Popular}></Route>
      <Route path="/TopRated" component={TopRated}></Route>
      <Route path="/Upcoming" component={Upcoming}></Route>
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))
```

### Homepage

![](./images/JJDBHome.png)

<strong>The Visual</strong>

The visuals for the homepage definitely took inspiration from IMBD with the black and yello contrast between the Navbar and body background color. We wanted to make it simple and easy on the eye for the user due to the overall simplicity of the app.

<strong>The Navbar</strong>

The Navbar is relatively simple and has been designed using the CSS Framework Bulma.

We wrapped the Navbar component in a `withRouter()` function when exporting the component so that it had access to this.props.history, which mean the Navbar had the capability to redirect the user.

We wanted to be able to direct the user to all pages of the app from the Navbar.

```js
import { withRouter } from 'react-router-dom'
```

```js
export default withRouter(NavBar)
```

Bulma gives you some nice features with the Navbar that definitely improve the UI. We wanted to incorporate their navbar-burger class for when a user reduced the width of the page.

We used the lifecycle `componentDidUpdate()` for the `{NavBar}` component as we wanted to make sure that when we redirected to a new page the navbar would no longer be active when the state of the navbar was in burger form.

```js
class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      navMobileOpen: false,
    }
  }
  componentDidUpdate(prevProps) {
    this.props.location.pathname !== prevProps.location.pathname
      ? this.setState({ navMobileOpen: false })
      : ''
  }
```

```js
<div className="navbar-brand">
  <Link className="navbar-item" to="/" id="logo">
    JJDb
  </Link>
  <a
    role="button"
    className={`navbar-burger burger ${
      this.state.navMobileOpen ? 'is-active' : ''
    }`}
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
    onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>
```

<img src=images/navbarburger2.jpg width=450 height=350> <img  src=images/navbarburger3.jpg width=450 height=350>

<strong>The Carousel</strong>

The Carousel on the homepage was created by installing the libraries <strong>'react-slick'</strong> and <strong>'slick-carousel'</strong> as well as adding two css stylesheets <strong>'slick'</strong> and <strong>'slick-theme'</strong> to the index.html. The `{SlickCarousel}` component is a separate smart component that was imported in the `{Home}` component which is called by `<BrowserRouter>`.

The `{SlickCarousel}` component initially sets the state as an object with 6 key: value pairs, with the value being an empty string.

```js
class SlickCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      slickPoster1: '',
      slickPoster2: '',
      slickPoster3: '',
      slickPoster4: '',
      slickPoster5: '',
      slickPoster6: ''
    }
  }

```

We wanted to display the top 6 most popular movies on [The Movie Database API](https://www.themoviedb.org/) and therefore with our GET request to the API, the URL is directed to the popular movies. In our response from the GET request we updated each key with the necessary data.

```js
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
      })
      .catch(err => console.error(err))
  }
```

For the Slick Carousel to actually run we needed to import Slider from 'react-slick' and use it in the `render()` function as a component. However, before this we needed to specify the settings of the carousel and because we didn't want a static homepage we set the `autoplay` value to true. We wanted the posters to be big on the Homepage and therefore set the `slidesToShow` to have a value of 3.

```js
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear'
}
```

Furthermore we had to use the ES6 feature, <strong>The Spread Operator</strong> to pass the settings props to the `{Slider}` component.

```js
<Slider {...settings}>
```

### The Movies

<strong>Searching for a Movie</strong>

Searching for a movie brought it's challenges due to the API we were using as it had trouble responding to a GET request when we passed in `{this.state.query}` into the query string. However, the reason for this was because of our limited knowledge of the `new RegExp()` object. Once we recognised this was our solution we then could use the `match()` method, which is used to search a string for a match against any regular expression. We set the movies value in the state as an empty array so that when we filtered the movies from the GET request after the search had been submitted, then these would pass into the movies array. Furthermore, we used `axios` instead of `fetch` as we were more comfortable with the syntax.

```js
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
```

To write cleaner code we then had two separate components; one to search for the movies called `{SearchForm}` and the other was to create the movie card - `{MovieCard}`. This was our first use of props in the project and it was great that we both felt relatively comfortable passing props from one component to the other.

We would pass the `onChange` prop from the `{DisplayMovies}` component to the `{SearchForm}` component. The onChange prop was setting the state of the query to the value that was being inputed into the the search form.

```js
<SearchForm
  query={this.state.query}
  onChange={(event) => this.setState({ query: event.target.value })}
  handleSearch={this.fetchMovies}
/>
```

The `{SearchForm component}` is just a functional component where we passed the query state as the value into the input, the onChange prop as the value of the onChange handler and lastly when we submitted the form using `onClick` this would then run our GET request to the API.

On a couple of other notes we used destructering to improve our code and secondly we checked that our API we would respond to a change in the query string by running a couple of calls in Insomnia.

```js
const SearchForm = ({ query, onChange, handleSearch }) => {
  return (
    <div className="SearchForm ">
      <div className="container is-centered">
        <form className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-normal"
              type="search"
              placeholder="search movie..."
              value={query}
              onChange={onChange}
            />
          </div>
          <div className="control">
            <button
              type="submit"
              className="button is-info is-normal"
              id="searchbutton"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
```

The `{MovieCard}` component is another functional component. To display the movies we map through the movies array in the `{DisplayMovies}` component and return the `{MovieCard}` component. As you can see below we again used the Spread Operator to pass through the data to the MovieCard Component.

```js
<div className="columns is-multiline is-mobile">
  {this.state.movies.map((movie, index) => {
    return <MovieCard key={index} {...movie} />
  })}
</div>
```

<strong>The Movie Modal</strong>

One of the more complex aspects of this app was using a Modal to display the movie information. Google was definitely our best friend here but there were still aspects that were challenging.

The Movie Modal was created by passing props from the `{MovieCard}` component to the to the `{ShowModal}` component. When the modal was toggled open we would set the state, with the props passed through to the component, into the `singleMove: {}`. The props that had just been set in the state were then passed through to a functional component called `{Modal}` which was used to display the content in the modal.

```js
class ShowModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      singleMovie: {},
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    this.setState(prev => {
      const newState = !prev.modalState
      return { modalState: newState }
    })
    this.setState({ singleMovie: this.props })
  }
```

```js
<Modal
  closeModal={this.toggleModal}
  modalState={this.state.modalState}
  singleMovie={this.state.singleMovie}
></Modal>
```

```js
const Modal = ({ children, closeModal, modalState, singleMovie }) => {
  if (!modalState) {
    return null
  }
```

```js
<header className="modal-card-head">
  <p className="modal-card-title">{singleMovie.title}</p>
  <button className="delete" onClick={closeModal} />
</header>
```

The design of the modal was created using Bulma. The information within modal is what we felt is the most concise and necessary information the user needs to know about that particular movie.

<strong>Comparing Movies</strong>

- We used very similar functionality for comparing movies but we only wanted to bring back the first index from the array.

```js
{
  this.state.movies ? <CompareMovieCard {...this.state.movies[0]} /> : <p> </p>
}
```

## Winners and Challenges

### Winners

- I thoroughly enjoyed working as a pair and being able to combine Joao's and my skills together to produce this application is extremely rewarding.
- Displaying movie information through the use of Modals was an exciting feature to add. Furthermore, using an information icon from Font Awesome was a nice touch.
- Getting the slick carousel on the Homepage.
- Getting to grips with passing props between Components in such a short time-frame was very pleasing.

### Challenges

- Implementing a Modal for the first time was tricky due to passing props from the `{MovieCard}` component to the `{ShowModal}` component. Also the use of proptypes was challenging.
- Originally we were using another API but it was very limited and we had issues with the search function. Therefore, we changed to The Movie Database API which was a lot less restrictive and provided many more endpoints to fetch data from.
- Making the search bar static on the page has been a blocker.

## Future Features

- Add trailers for each movie
- Clean up the design
- Add a Menu instead of having all the links on the Navbar

## Lessons Learned

- First experience of Pair Programming
- How to successfully update the state with setState and also update the lifecycle of the component using `componentDidUpdate()`
- Pass props between React Components.
