import React from "react";
import PropTypes from 'prop-types'
import {ImageGalleryStyle} from './imageGallery.styled.js'

export const ImageGallery = ({ images }) => { 
  return (
    <ImageGalleryStyle>
      {
      images.map(image => (
        <imageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
    ))}
    </ImageGalleryStyle>
  ) 
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  )
} 