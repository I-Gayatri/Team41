import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Branding from '../components/branding'
import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>Test - Ikshana</title>
        <meta property="og:title" content="Test - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="test-details-container"></div>
      <div>
        <DangerousHTML
          html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
        ></DangerousHTML>
      </div>
      <div className="test-container1">
        <h1 className="test-text">Dyslexia</h1>
        <span className="test-text01">
          <span className="test-text02">
            Dyslexia is a brain based/neurological learning condition that
            primarily impacts reading, spelling and writing. However they do not
            have vision issues and are most likely to have a normal IQ and
            generally lack phonemic awareness. A student with dyslexia will have
            a particular difficulty with single word reading networks that are
            brain based (neurological). Dyslexia is not a problem with
            comprehension. Individuals with dyslexia are able to use higher
            level language skills to support their reading of connected text
            (stories) and this ability to ‘compensate’ may mask their underlying
            difficulties with single word reading (decoding).The central
            difficulty for a student with dyslexia is to convert letter symbols
            to their correct sound (decode) and convert sounds to their correct
            written symbol(spell). Research into dyslexia subtypes indicates
            that poor visual (i.e., orthographic) coding can also be part of the
            difficulty.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </span>
        <Link to="/dyslexia" className="test-navlink button"> 
          Take your test today
        </Link>
        <Link to="/resources" className="test-navlink01 button">
          Resources
        </Link>
        <Link to="/connect" className="test-navlink02 button">
          Connect to nearest centers
        </Link>
      </div>
      <div className="test-container2">
        <h1 className="test-text07">Dyscalculia</h1>
        <span className="test-text08">
          <span className="test-text09">
            Dyscalculia is a learning disorder which represents 
          </span>
          <span className="test-text10">
            difficulty in understanding numbers learning difficulty in 
          </span>
          <span className="test-text11">
            mathematical skills. Dyscalculia refers to a persistent difficulty
            in learning and understanding mathematics. For children, these
            difficulties are manifested as a slow learning of number concepts
            and basic arithmetic. During the preschool years, the core
            difficulty that may presage risk for long-term math difficulties is
            delayed learning of the magnitudes associated with number words and
            Arabic numerals (i.e., learning their cardinal values), and in the
            early elementary school years, a poor understanding of the relations
            among numbers (e.g., 17 = 10 and 7) and difficulties committing
            basic arithmetic facts to long-term memory.1 These early delays put
            children behind in learning other areas of mathematics on which this
            basic knowledge is foundational, and make it difficult for them to
            catch up to their peers.
          </span>
        </span>
        <Link to="/dyscalculia" className="test-navlink03 button">
          Take your test today
        </Link>
        <Link to="/resources" className="test-navlink04 button">
          Resources
        </Link>
        <Link to="/connect" className="test-navlink05 button">
          Connect to nearest centers
        </Link>
      </div>
      <div className="test-container3">
        <h1 className="test-text12">Dysgraphia</h1>
        <span className="test-text13">
          <span>
            At its broadest definition, dysgraphia is a disorder of writing
            ability at any stage, including problems with letter
            formation/legibility, letter spacing, spelling, fine motor
            coordination, rate of writing, grammar, and composition.
          </span>
          <br></br>
          <span>
            Writing is a complex task that is vital to learning and is usually
            acquired in the early years of life. ‘Dysgraphia’ and ‘specific
            learning disorder in written expression’ are terms used to describe
            those individuals who, despite exposure to adequate instruction,
            demonstrate writing ability discordant with their cognitive level
            and age. Dysgraphia can present with different symptoms at different
            ages. Different theories have been proposed regarding the mechanisms
            of dysgraphia. Dysgraphia is poorly understood and is often
            undiagnosed.
          </span>
          <br></br>
        </span>
        <Link to="/dysgraphia" className="test-navlink button"> 
          Take your test today
        </Link>
        <Link to="/resources" className="test-navlink06 button">
          Resources
        </Link>
        <Link to="/connect" className="test-navlink07 button">
          Connect to nearest centers
        </Link>
      </div>
      <div className="test-container4">
        <h1 className="test-text18">ADHD</h1>
        <span className="test-text19">
          <span>
            ADHD is one of the most common neurodevelopmental disorders of
            childhood. It is usually first diagnosed in childhood and often
            lasts into adulthood. Children with ADHD may have trouble paying
            attention, controlling impulsive behaviors (may act without thinking
            about what the result will be), or be overly active.
          </span>
          <br></br>
        </span>
        <Link to="/adhd" className="test-navlink08 button">
          Take your test today
        </Link>
        <Link to="/resources" className="test-navlink09 button">
          Resources
        </Link>
        <Link to="/connect" className="test-navlink10 button">
          Connect to nearest centers
        </Link>
      </div>
      <footer className="test-footer">
        <div className="test-top">
          <Branding></Branding>
          <nav className="test-navigation-links"></nav>
        </div>
        <div className="test-middle">
          <span className="test-text22">+91 12345 67890 help@ikshana.com</span>
          <span className="test-text23">
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
            <br className="test-text27"></br>
            <span>Bengaluru - 560 068</span>
          </span>
        </div>
        <div className="test-bottom">
          <span className="test-copyright">© Ikshana – 2022</span>
        </div>
      </footer>
    </div>
  )
}

export default Test
