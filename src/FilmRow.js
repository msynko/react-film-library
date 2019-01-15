import React, { Component } from 'react';
import Fave from './Fave';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
  handleDetailsClick(film) {
    console.log('Fetching details for ' + film.title + '!')
  }
  render() {
    return (
     <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
       <figure className="film-poster">
         <FilmPoster film={this.props.film} />
       </figure>

       <div className="film-summary">
         <h1>{this.props.film.title}</h1>
         <p>{this.props.film.release_date.slice(0, 4)}</p>
         <Fave click={this.props.click} film={this.props.film}/>
       </div>
     </div>
    )
  };
}

export default FilmRow;
