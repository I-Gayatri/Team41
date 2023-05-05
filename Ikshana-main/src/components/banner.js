import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div id="banner" data-persistence="true" className="banner-banner">
      <div className="banner-captions">
        <a href={props.RedirectMobile} className="banner-link">
          <div className="banner-caption">
            <span className="banner-text">{props.CaptionMobile}</span>
            <span className="banner-text1">{props.Bold1}</span>
          </div>
        </a>
      </div>
      <div id="close" className="banner-close"></div>
    </div>
  )
}

Banner.defaultProps = {
  Bold1: 'newsletter',
  CaptionMobile: 'Join our',
  RedirectMobile: 'https://medium.com',
}

Banner.propTypes = {
  Bold1: PropTypes.string,
  CaptionMobile: PropTypes.string,
  RedirectMobile: PropTypes.string,
}

export default Banner
