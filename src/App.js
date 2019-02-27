import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FilmList from "./components/FilmList";
import Film from "./components/Film";

import SearchForm from './components/SearchForm';
import logo from './logo.svg';
import './App.css';

const GHIBLI_API_FILM_LIST = "https://ghibliapi.herokuapp.com/films"
const MOVIEDB_QUERY = "https://api.themoviedb.org/3/search/movie?api_key=77d33f900360c685bd8223e4c09d7ad2&query="

class App extends Component {

  state = {
    isLoaded: false,
    films: [],
  }

  componentDidMount() {
    fetch(GHIBLI_API_FILM_LIST)
      .then(result => result.json())
      .then(
        (films) => {
          films.map((film, index) => {
            film.poster = '/poster.png';
            film.shortname = film.title.replace(/\s+/g, '-').toLowerCase();
            return film;
          })
          this.setState({
            isLoaded: true,
            films: films
          });
          films.map((film, index) => {
            film.poster = '/poster.png';
            fetch(MOVIEDB_QUERY + film.title)
              .then(response => response.json())
              .then(response_moviedb => {
                if (response_moviedb.results.length > 0){ 
                  var sel_movie = response_moviedb.results.find(function(el) {
                    return el.original_language === 'ja'; 
                  });
                  films[index].backdrop = 'http://image.tmdb.org/t/p/w500/' + sel_movie.backdrop_path;
                  films[index].poster = 'http://image.tmdb.org/t/p/w500/' + sel_movie.poster_path;
                  this.setState({ films: films });
                }
              })
            return film;
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-main">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <SearchForm films={this.state.films} router={this.context.router} />
            </header>
            <Switch>
              <Route exact path="/" render={(props) => <FilmList films={this.state.films} {...props} /> }  />
              <Route exact path="/:shortname" render={(props) => <Film film={this.state.films.find(f => f.shortname === props.match.params.shortname)} {...props} /> }  />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
