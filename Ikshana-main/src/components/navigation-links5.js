import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links5.css'

const NavigationLinks5 = (props) => {
  return (
    <nav className={`navigation-links5-nav ${props.rootClassName} `}>
      <span className="navigation-links5-text">{props.text}</span>
      <span className="navigation-links5-text1">{props.text1}</span>
      <span className="navigation-links5-text2">{props.text2}</span>
      <span className="navigation-links5-text3">{props.text3}</span>
      <span className="navigation-links5-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks5.defaultProps = {
  text4: 'Blog',
  text2: 'Pricing',
  text1: 'Features',
  text3: 'Team',
  rootClassName: '',
  text: 'About',
}

NavigationLinks5.propTypes = {
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks5
