import React from 'react'

import PropTypes from 'prop-types'

import Number from './number'
import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-steps-list">
      <div className="steps-list">
        <div className="steps-section">
          <Number></Number>
          <span className="steps-caption">{props.Caption4}</span>
        </div>
        <div className="steps-divider"></div>
        <div className="steps-section1">
          <Number Value="2" rootClassName="number-root-class-name"></Number>
          <span className="steps-caption1">{props.Caption41}</span>
        </div>
        <div className="steps-divider1"></div>
        <div className="steps-section2">
          <Number Value="3" rootClassName="number-root-class-name1"></Number>
          <span className="steps-caption2">{props.Caption411}</span>
        </div>
        <div className="steps-divider2"></div>
        <div className="steps-section3">
          <Number Value="4" rootClassName="number-root-class-name2"></Number>
          <span className="steps-caption3">{props.Caption4111}</span>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  Caption4111: 'See resources',
  Caption41: 'Get scores and compare',
  Caption4: 'Take tests',
  Caption411: 'Connect with experts',
}

Steps.propTypes = {
  Caption4111: PropTypes.string,
  Caption41: PropTypes.string,
  Caption4: PropTypes.string,
  Caption411: PropTypes.string,
}

export default Steps
