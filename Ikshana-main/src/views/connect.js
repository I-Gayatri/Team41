import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Branding from '../components/branding'
import './connect.css'

const Connect = (props) => {
  return (
    <div className="connect-container">
      <Helmet>
        <title>Connect - Ikshana</title>
        <meta property="og:title" content="Connect - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div data-thq="thq-dropdown" className="connect-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="connect-dropdown-toggle">
          <span className="connect-text">City</span>
          <div data-thq="thq-dropdown-arrow" className="connect-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="connect-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="connect-dropdown-list">
          <li data-thq="thq-dropdown" className="connect-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="connect-dropdown-toggle1"
            >
              <a
                href="https://www.google.com/search?tbs=lf:1,lf_ui:2&amp;tbm=lcl&amp;sxsrf=AJOqlzWFFteYCyvs3Ci3toYOlFnEzrGtmQ:1677256330337&amp;q=learning+disabilities+centers+in+bangalore&amp;rflfq=1&amp;num=10&amp;sa=X&amp;ved=2ahUKEwifkJHeyq79AhUUjeYKHXhfDbcQjGp6BAgREAE&amp;biw=1536&amp;bih=722&amp;dpr=1.25#rlfi=hd:;si:;mv:[[13.079806399999999,77.6603719],[12.871139399999999,77.5046895]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                target="_blank"
                rel="noreferrer noopener"
                className="connect-link"
              >
                Bengaluru
              </a>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="connect-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="connect-dropdown-toggle2"
            >
              <a
                href="https://www.google.com/search?q=learning+disability+schools+in+chennai&amp;biw=1536&amp;bih=722&amp;tbm=lcl&amp;sxsrf=AJOqlzVEC9SFjE0QBvbjOq822jpHmVwRKw%3A1677257044742&amp;ei=VOn4Y9SALdie4-EPpPGs4AU&amp;oq=learning+disabilities+centers+in+chenna&amp;gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAEYADIKCAAQFhAeEA8QCjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgMyBQgAEIYDOgQIIxAnOgcIIRCgARAKOgsIIRAWEB4Q8QQQHToICCEQFhAeEB06DQghEBYQHhAPEPEEEB06CgghEBYQHhAPEB1QqglYiRdgryBoAXAAeACAAYwCiAH1DZIBBTAuNi4zmAEAoAEBwAEB&amp;sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[13.1469154,80.2850928],[12.8445247,80.06859279999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                target="_blank"
                rel="noreferrer noopener"
                className="connect-link1"
              >
                Chennai
              </a>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="connect-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="connect-dropdown-toggle3"
            >
              <a
                href="https://www.google.com/search?q=learning+disability+schools+in+hyderabad&amp;biw=1536&amp;bih=722&amp;tbm=lcl&amp;sxsrf=AJOqlzX4E6XZ8s8yUKIq33GO26VOxJ5bXA%3A1677257102583&amp;ei=jun4Y5ykI_DB4-EP7v6W2AY&amp;oq=learning+disability+schools+in+hy&amp;gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAEYADIFCAAQgAQyBQgAEIYDMgUIABCGAzIFCAAQhgMyBQgAEIYDOgQIIxAnOgkIABAWEB4Q8QQ6CwgAEBYQHhAPEPEEOgYIABAWEB46CAgAEBYQHhAPUKkMWIcOYIAWaABwAHgAgAHxA4gB4QeSAQcwLjMuNC0xmAEAoAEBwAEB&amp;sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[17.5350885,78.5497626],[17.3486184,78.3385777]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                target="_blank"
                rel="noreferrer noopener"
                className="connect-link2"
              >
                Hyderabad
              </a>
            </div>
          </li>
        </ul>
      </div>
      <footer className="connect-footer">
        <div className="connect-top">
          <Branding></Branding>
          <nav className="connect-navigation-links"></nav>
        </div>
        <div className="connect-middle">
          <span className="connect-text1">
            +91 12345 67890 help@ikshana.com
          </span>
          <span className="connect-text2">
            <span>
              Dayananda Sagar University,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Hosur Road,</span>
            <br className="connect-text6"></br>
            <span>Bengaluru - 560 068</span>
          </span>
        </div>
        <div className="connect-bottom">
          <span className="connect-copyright">© Ikshana – 2022</span>
        </div>
      </footer>
    </div>
  )
}

export default Connect
