import React, {Component} from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
  render() {
    return (
    <div className="filmrow">
      <figure className="film-poster">
        <FilmPoster film={this.props.film} />
      </figure>

        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <h4>{this.props.film.title}</h4>
           <p>{this.props.film.release_date.slice(0, 4)}</p>
        </div>
      </div>
    )
  }
}

export default FilmRow;
