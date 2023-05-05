import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links7.css'

const NavigationLinks7 = (props) => {
  return (
    <nav className={`navigation-links7-nav ${props.rootClassName} `}>
      <span className="navigation-links7-text">{props.text}</span>
      <span className="navigation-links7-text1">{props.text1}</span>
      <span className="navigation-links7-text2">{props.text2}</span>
      <span className="navigation-links7-text3">{props.text3}</span>
    </nav>
  )
}

NavigationLinks7.defaultProps = {
  text: 'ABOUT',
  text3: 'RESOURCES',
  rootClassName: '',
  text2: 'CONNECT WITH EXPERTS',
  text1: 'TESTS',
}

NavigationLinks7.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks7
