import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Film.css';


class Film extends Component {
  state = {
    test: ''
  }
  render() {
    if (!this.props.film) {
      return <Redirect push to='/' />;
    }
    var divStyle = { backgroundImage: 'url(' + this.props.film.backdrop + ')' };
    return (
      <div className="film-complete" style={divStyle}>
        <div className="film-complete-inner">
          <div className="film-complete-poster">
            <img src={this.props.film.poster} className="film-poster" alt="poster" />
          </div>
          <div className="film-complete-data">
            <h1>{this.props.film.title}</h1>
            <p>{this.props.film.description}</p>
            <div className="return-link">
              <p><Link to="/">Return to films list</Link></p>
            </div>
          </div>
        </div>
      </div> 
    );
  }
};

export default Film;
