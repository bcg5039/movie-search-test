import React from 'react'
import MovieListItem from '../containers/movie-item.js'
import MovieSearch from '../containers/movie-search'

import { map } from 'ramda'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.handleResults = this.handleResults.bind(this)
  }
  handleResults(movies) {
    this.setState({ results: movies })
  }
  render() {
    const li = function(movie) {
      return (
        <li key={movie.imdbID}>
          <MovieListItem {...movie} />
        </li>
      )
    }
    return (
      <div>
        <MovieSearch onResults={this.handleResults} />
        {this.state.results.length !== 0 &&
          <div className="pa4">
            <h2>Results</h2>
            <ul className="list">
              {map(li, this.state.results)}
            </ul>
          </div>}
      </div>
    )
  }
}

export default Search
