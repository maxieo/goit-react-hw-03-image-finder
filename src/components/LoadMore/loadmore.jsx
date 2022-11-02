import PropTypes from 'prop-types'
import {ButtonStyle } from './loadmore.styled.js'

export const Button = ({ loadMore }) => { 
  return (
    <ButtonStyle type='button' onClick={ loadMore }>Load More</ButtonStyle>
  )
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired
}