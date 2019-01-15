import React, { Component } from 'react'


class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Favourited' + this.props.film.title)
    this.setState((prevState) => {return {isFave: !prevState.isFave}})
  }
  render() {
    const add_to_queue = this.state.isFave? " add_to_queue" : " remove_from_queue"
    return (
      <div className={"film-row-fave " + add_to_queue} onClick={(e) => { e.stopPropagation(); this.handleClick()}}>
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave;
