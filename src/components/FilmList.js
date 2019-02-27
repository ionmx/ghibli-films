import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './FilmList.css';


class FilmList extends Component {
  state = {
    test: ''
  }
  render() {
    return (
      <div className="films">
        {this.props.films.map((film, index) => (
          <div className="film" id={film.id} data-index={index} key={film.id}>
            <Link to={film.shortname}>
              <img src={film.poster} className="film-poster" alt="poster" />
              <div className="film-title">{film.title}</div>
            </Link>
          </div>
        ))}
      </div> 
    );
  }
};

export default FilmList;