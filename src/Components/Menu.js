import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return <div className="dropdown is-hoverable">
    <div className="dropdown-trigger">
      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
        <span>Menu</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down"></i>
        </span>
      </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu3" role="menu">
      <div className="dropdown-content">
        <Link to="/Latest Movies" className="dropdown-item">
        Latest Movies
        </Link>
        <Link to="/Now Playing" className="dropdown-item">
        Now Playing
        </Link>
        <Link to="/Popular" className="dropdown-item">
        Popular
        </Link>
        <Link to="/TopRated" className="dropdown-item">
        Top Rated
        </Link>
        <Link to="/UpComing" className="dropdown-item">
        Upcoming
        </Link>
      </div>
    </div>
  </div>
}

export default Menu
