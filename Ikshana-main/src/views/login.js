import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Branding from '../components/branding'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Ikshana</title>
        <meta property="og:title" content="Login - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="login-donate"></div>
      <section className="login-updates">
        <div className="login-content">
          <div className="login-details">
            <h1 className="login-text">Login</h1>
            <form className="login-form">
              <div className="login-container01">
                <div className="login-container02">
                  <div className="login-container03">
                    <div className="login-container04">
                      <div className="login-container05">
                        <div className="login-container06">
                          <div className="login-container07">
                            <label className="login-text01">Username</label>
                            <input
                              type="text"
                              placeholder="username"
                              className="login-textinput input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <label className="login-text02">Password</label>
                  </div>
                  <input
                    type="password"
                    placeholder="password"
                    className="login-textinput1 input"
                  />
                </div>
                <div className="login-container08"></div>
                <button autoFocus className="login-button button">
                  Login
                </button>
                <Link to="/register" className="login-navlink">
                  <label className="login-text03">
                    Click here to register as new user!
                  </label>
                </Link>
              </div>
              <div className="login-container09"></div>
            </form>
          </div>
        </div>
      </section>
      <footer className="login-footer">
        <div className="login-top">
          <Branding></Branding>
          <nav className="login-navigation-links"></nav>
        </div>
        <div className="login-middle">
          <span className="login-text04">+91 12345 67890 help@ikshana.com</span>
          <span className="login-text05">
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
            <br className="login-text09"></br>
            <span>Bengaluru - 560 068</span>
          </span>
        </div>
        <div className="login-bottom">
          <span className="login-copyright">© Ikshana – 2022</span>
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

export default Login
