import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput
} from './searchbar.styled.js'

export class Searchbar extends Component {
  state = {
    search: ''
  }

  handleChange = e => { 
    this.setState({search: e.currentTarget.value.toLowerCase()})
  }

  handleSubmit = e => { 
    e.preventDefault()
    if (this.state.search.trim() === '') { 
      toast.error('Type your request')
      return
    }
    this.props.onSubmit(this.state.search)
    this.setState ({ search: '' })
  }

  handleChangeValue = e => { 
    this.setState({search: e.currentTarget.value.toLowerCase()})
  }
  
  render() {
    return (
      <>
        <SearchbarHeader>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel >Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              name="search"
              value={this.state.search}
              onChange={this.handleChangeValue}
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchbarHeader>
      </>
    );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};