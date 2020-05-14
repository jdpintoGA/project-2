import React from 'react'

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
export default SearchForm
