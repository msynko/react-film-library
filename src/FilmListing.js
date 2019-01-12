import React, {Component} from 'react';
import FilmRow from './FilmRow.js';


class FilmListing extends Component {
  render() {
    const FilmRows = this.props.tmdb.films.map((film) =>
     <FilmRow film={film} key={ film.id } />
   )

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {FilmRows}
        )}
        </div>
    )
  }
}

export default FilmListing;
