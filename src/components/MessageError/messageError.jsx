import React from "react";
import PropTypes from 'prop-types'

export const MessageError = ({ message }) => { 
  return (
    <div>
      <p>{message}</p>
      <img src="{}" alt="error" />
    </div>
  )
}

MessageError.propTypes = {
  message: PropTypes.string.isRequired
}
