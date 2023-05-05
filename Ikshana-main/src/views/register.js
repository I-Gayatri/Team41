import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Branding from '../components/branding'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Ikshana</title>
        <meta property="og:title" content="Register - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name8"></Header>
      <div className="register-donate"></div>
      <section className="register-updates">
        <div className="register-content">
          <div className="register-details">
            <h1 className="register-text">
              <span>Register</span>
              <br></br>
            </h1>
            <form className="register-form">
              <label className="register-text03">
                <span>Full name</span>
                <br></br>
              </label>
              <input
                type="text"
                required
                autoFocus
                placeholder="full name"
                className="register-textinput input"
              />
              <div className="register-container1"></div>
              <label className="register-text06">
                <span>Date of Birth</span>
                <br></br>
              </label>
              <input
                type="date"
                required
                autoFocus
                placeholder="dob"
                className="register-textinput1 input"
              />
              <div className="register-container2"></div>
              <label className="register-text09">
                <span>Email id</span>
                <br></br>
              </label>
              <input
                type="email"
                required
                autoFocus
                placeholder="email id"
                className="register-textinput2 input"
              />
              <div className="register-container3"></div>
              <label className="register-text12">
                <span>Create password</span>
                <br></br>
              </label>
              <input
                type="password"
                required
                autoFocus
                minlength="8"
                placeholder="create password"
                className="register-textinput3 input"
              />
              <div className="register-container4"></div>
              <label className="register-text15">
                <span>Confirm password</span>
                <br></br>
              </label>
              <input
                type="password"
                required
                autoFocus
                minlength="8"
                placeholder="confirm password"
                className="register-textinput4 input"
              />
              <div className="register-container5"></div>
              <div className="register-container6">
                <input
                  type="checkbox"
                  checked="true"
                  required
                  autoFocus
                  className="register-checkbox"
                />
                <label className="register-text18">
                  I accept the terms and conditions.
                </label>
              </div>
              <button
                type="submit"
                autoFocus
                className="register-button button"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="register-footer">
        <div className="register-top">
          <Branding></Branding>
          <nav className="register-navigation-links"></nav>
        </div>
        <div className="register-middle">
          <span className="register-text19">
            +91 12345 67890 help@ikshana.com
          </span>
          <span className="register-text20">
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
            <br className="register-text24"></br>
            <span>Bengaluru - 560 068</span>
          </span>
        </div>
        <div className="register-bottom">
          <span className="register-copyright">© Ikshana – 2022</span>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
        ></DangerousHTML>
      </div>
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
    </div>
  )
}

export default Register
