import React from 'react'

class MovieSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      q: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ q: event.target.value })
  }
  searchMovies(q) {
    return fetch(
      `https://www.omdbapi.com/?apikey=21d70f1a&s=${q}&y=&plot=full&r=json`
    ).then(res => res.json())
  }
  handleSubmit(event) {
    event.preventDefault()
    this.searchMovies(this.state.q) //send results back to parent
      .then(results => {
        if (results.Response === 'False') {
          alert(results.Error)
          return
        }
        console.log(results)
        this.props.onResults(results.Search)
      })
  }
  render() {
    return (
      <form className="pa4" onSubmit={this.handleSubmit}>
        <div className="measure">
          <label className="db b mb2">Search</label>
          <input
            value={this.state.q}
            onChange={this.handleChange}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
          />
        </div>
        <div>
          <button>
            Search
          </button>
        </div>
      </form>
    )
  }
}
export default MovieSearch
