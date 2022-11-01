import { Component } from "react";
import { Searchbar } from "./SearchBar/searchbar";
import {fetchImg} from "./api"
import { ImageGallery } from "./ImageGallery/imageGallery";
import { AppStyle } from "./App.styled";

export class App extends Component { 
  state = {
    search: '',
    page: 1,
    images: [],
    totalPages: 1,
    status: 'idle',
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      fetchImg(search, page)
        .then(res => {
          const images = res.hits.map(image => {
            return {
              id: image.id,
              webformatURL: image.webformatURL,
              tags: image.tags,
              largeImageURL: image.largeImageURL,
            };
          });
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            totalPages: Math.ceil(res.totalHits / 12),
          }));
        }).catch(e => { 
          this.setState({ status: 'rejected'})
        })
    }
  };


  handleSearch = name => {
    this.setState({ search: name, page: 1, images: []})
   }

  render() { 
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images = {this.state.images}/>
      </AppStyle>
      
    )
  }
}