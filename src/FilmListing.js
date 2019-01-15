import React, {Component} from 'react';
import FilmRow from './FilmRow.js';
import Fave from './Fave.js';

class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filter) {
    console.log('Setting filter to ' + filter);
    this.setState(() => {return {filter: filter}});
    console.log(this.state.filter);
  }
  render() {
    const allActive = this.state.filter === 'all'? " is-active" : ""
    const faveActive = this.state.filter === 'faves'? " is-active" : ""

    var filmRows = this.props.tmdb.films.map(film => {
      return <FilmRow film={film} key={film.id} click={this.handleFilterClick}/>
    });

    return (
      <div className="film-list">

        <h1 className="section-title">
          FILMS
        </h1>

        <div className="film-list-filters">

          <div className={"film-list-filter" + allActive} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.tmdb.films.length}</span>
          </div>

          <div className={"film-list-filter" + faveActive} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>

        </div>

        {filmRows}

      </div>
    )
  }
}

export default FilmListing;
