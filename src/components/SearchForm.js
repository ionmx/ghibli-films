import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    value: '',
    redirect: false,
    redirect_to: '',
    loading: false,
    matched_films: []
  }
  
  render() {
    if (this.state.redirect === true) {
      this.setState({ redirect: false });
      return <Redirect push to={this.state.redirect_to} />;
    }
    return (
      <div className="SearchForm">
        <Autocomplete
          value={this.state.value}
          inputProps={{ id: 'films-autocomplete' }}
          items={this.state.matched_films}
          getItemValue={(item) => item.title}
          onSelect={(value, item) => {
            this.setState({ redirect_to: item.shortname });
            this.setState({ redirect: true  })
            this.setState({ value })
          }}
          onChange={(event, value) => {
            this.setState({ matched_films: this.props.films.filter(film => film.title.toLowerCase().indexOf(value.toLowerCase()) !== -1) })
            this.setState({ value })
          }}
          renderItem={(item, isHighlighted) => (
            <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} key={item.id}>
              <div className="search-img"><img src={item.backdrop} alt="search-backdrop" /></div>
              <div className="search-title">{item.title}</div>
            </div>
          )}
          renderMenu={(items, value) => (
            <div className="menu">
              {value === '' ? (
                <div className="item">Type of the name of a Ghibli film</div>
              ) : this.state.loading ? (
                <div className="item">Loading...</div>
              ) : items.length === 0 ? (
                <div className="item">No matches for <strong>{value}</strong></div>
              ) : items }
            </div>
          )}
        />
      </div>
    );
  }
}

export default SearchForm;
