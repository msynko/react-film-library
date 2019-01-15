import React, { Component } from 'react'


class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  e.stopPropagation();
  console.log('Handling Fave click!');
  this.setState({isFave: !this.state.isFave});
  }

  render() {
    const isFave = (this.state.isFave) ? " add_to_queue" : " remove_from_queue"

    return (
        <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
          <i className="material-icons">{isFave}</i>
        </div>
    )
  }
}

export default Fave;
