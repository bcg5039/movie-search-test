import React from 'react'

const MovieListItem = props => {
  return (
    <article>
      <div className="link dt w-100 bb b--black-10 pb2 mt2 dim" href="#0">
        <div className="dtc v-top pl2">
          <h1 className="f6 black mv0">{props.Title}</h1>
          <h2 className="f6 mt2 mb0 black-60">{props.Type}</h2>
          <dl className="mt2 f6">
            <dt className="clip">Year</dt>
            <dd className="ml0">{props.Year}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default MovieListItem
