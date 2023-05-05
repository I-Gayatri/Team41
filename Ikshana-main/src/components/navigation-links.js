import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav
      className={`navigation-links-navigation-links ${props.rootClassName} `}
    >
      <div className="navigation-links-links">
        <Link to="/" className="navigation-links-link navLink">
          {props.Link}
        </Link>
        <Link to="/" className="navigation-links-link1 navLink">
          {props.Link1}
        </Link>
        <Link to="/" className="navigation-links-link2 navLink">
          {props.Link2}
        </Link>
        <Link to="/" className="navigation-links-link3 navLink">
          {props.Link3}
        </Link>
      </div>
      <div className="navigation-links-hamburger">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="navigation-links-image"
        />
      </div>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  Link1: 'Take Action',
  rootClassName: '',
  image_alt: 'image',
  Link: 'Mission',
  image_src: '/playground_assets/hamburger.svg',
  Link2: 'News',
  Link3: 'Contact',
}

NavigationLinks.propTypes = {
  Link1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  Link: PropTypes.string,
  image_src: PropTypes.string,
  Link2: PropTypes.string,
  Link3: PropTypes.string,
}

export default NavigationLinks
