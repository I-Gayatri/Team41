import React from 'react'

import PropTypes from 'prop-types'

import './number.css'

const Number = (props) => {
  return (
    <div className={`number-number number ${props.rootClassName} `}>
      <span className="">{props.Value}</span>
    </div>
  )
}

Number.defaultProps = {
  rootClassName: '',
  Value: '1',
}

Number.propTypes = {
  rootClassName: PropTypes.string,
  Value: PropTypes.string,
}

export default Number
