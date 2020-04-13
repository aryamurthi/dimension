import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> ©2020 Arya Murthi  Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> helmet icon design by <a href="https://thenounproject.com/Graphic_Tigers/">Graphic Tigers</a> </p>
  
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
