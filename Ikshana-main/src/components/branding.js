import React from 'react'

import PropTypes from 'prop-types'

import './branding.css'

const Branding = (props) => {
  return (
    <div className={`branding-branding ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt1}
        src={props.pastedImage_src1}
        className="branding-pasted-image"
      />
    </div>
  )
}

Branding.defaultProps = {
  rootClassName: '',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src1: '/playground_assets/pastedimage-jlzi-200w.png',
}

Branding.propTypes = {
  rootClassName: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src1: PropTypes.string,
}

export default Branding
