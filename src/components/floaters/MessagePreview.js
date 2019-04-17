import React from 'react'
import PropTypes from 'prop-types'

const Preview = (props) => {
  return (
    <div className="floater_message-preview">
      <h4>{props.message.author}</h4>
      <p>{props.message.content.slice(0, 16)}
      {props.message.content.length >= 16 ? '...' : null}
      </p>
      <p className="floater_message-preview-date">{props.message.date}</p>
    </div>
  )
}

Preview.propTypes = {
  message: PropTypes.object.isRequired
}

export default Preview;
