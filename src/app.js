import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import 'bulma'

import Home from './Components/Home'
import NavBar from './Components/NavBar'
import CompareMovie from './Components/CompareMovie'
import SearchMovie from './Components/SearchMovie'
import LatestMovies from './Components/LatestMovies'
import NowPlaying from './Components/NowPlaying'
import Popular from './Components/Popular'
import TopRated from './Components/TopRated'
import Upcoming from './Components/Upcoming'

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
