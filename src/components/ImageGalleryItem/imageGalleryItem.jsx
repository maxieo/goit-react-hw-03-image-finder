import React, { Component } from "react";
import PropTypes from 'prop-types'
import {ImageGalleryStyled} from './imageGallery.styled.js'

export class ImageGalleryItem extends Component({ webformatURL, tags, largeImageURL }) { 
  render() { 
    return (
      <ImageGalleryStyled>     
        <galleryImage
          src={webformatURL}
          data-large={largeImageURL}
          alt={tags}
        />
      </ImageGalleryStyled>
    )
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired
}