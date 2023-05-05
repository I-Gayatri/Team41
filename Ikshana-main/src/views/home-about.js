import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Branding from '../components/branding'
import Steps from '../components/steps'
import './home-about.css'

const HomeAbout = (props) => {
  return (
    <div className="home-about-container">
      <Helmet>
        <title>Ikshana</title>
        <meta property="og:title" content="Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-about-main">
        <div className="home-about-content">
          <div className="home-about-container1">
            <header
              data-thq="thq-navbar"
              className="home-about-navbar-interactive"
            >
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="home-about-desktop-menu"
              >
                <div className="home-about-links"></div>
              </div>
              <div
                data-thq="thq-burger-menu"
                className="home-about-burger-menu"
              >
                <button className="button">
                  <svg viewBox="0 0 1024 1024" className="home-about-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="home-about-mobile-menu"
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-about-nav"
                >
                  <div className="home-about-container2">
                    <Branding rootClassName="branding-root-class-name"></Branding>
                    <div
                      data-thq="thq-close-menu"
                      className="home-about-menu-close"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="home-about-icon02"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-about-links1">
                    <Link to="/" className="home-about-link navLink">
                      Mission
                    </Link>
                    <Link to="/" className="home-about-link1 navLink">
                      Take Action
                    </Link>
                    <Link to="/" className="home-about-link2 navLink">
                      News
                    </Link>
                    <Link to="/" className="home-about-link3 navLink">
                      Contact
                    </Link>
                  </div>
                  <div className="home-about-icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-about-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-about-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-about-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="home-about-hero-section">
            <div className="home-about-header">
              <strong className="home-about-heading">
                Learn about learning disabilities and ADHD
              </strong>
            </div>
            <div className="home-about-buttons">
              <Link to="/resources" className="home-about-navlink button">
                <span className="home-about-text">RESOURCES</span>
              </Link>
              <Link to="/test" className="home-about-navlink1 button">
                <span>DISORDERS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about-details-container"></div>
      <section className="home-about-mission">
        <div className="home-about-content1">
          <div className="home-about-main1">
            <span className="home-about-title">Our Mission</span>
            <div className="home-about-header1">
              <h2 className="home-about-heading1">
                As final year B.Tech students, our goal is to raise awareness
                about learning disabilities and ADHD and their impact on
                children. These conditions can greatly affect mental health and
                academic performance. Our aim is to promote understanding and
                support for those affected by them.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
            </div>
          </div>
          <div className="home-about-highlights">
            <div className="home-about-highlight">
              <h3 className="home-about-title1">Take tests to identify.</h3>
              <p className="home-about-description">
                Identify if your child has any of these disorders by taking our
                test.
              </p>
            </div>
            <div className="home-about-highlight1">
              <h3 className="home-about-title2">Connect with experts.</h3>
              <p className="home-about-description1">
                Connect with relevant experts near you to get proper diagnosis
                and work towards overcoming it.
              </p>
            </div>
          </div>
        </div>
        <div className="home-about-images">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1613950190144-4f2a84c75e8c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxLSURTJTIwc3R1ZHlpbmd8ZW58MHx8fHwxNjc0ODIyMTY4&amp;ixlib=rb-4.0.3&amp;h=800"
            className="home-about-image"
          />
          <div className="home-about-row"></div>
        </div>
      </section>
      <section className="home-about-petitions">
        <div className="home-about-images1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1549737221-bef65e2604a6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxLSURTJTIwc3R1ZHlpbmd8ZW58MHx8fHwxNjc0ODIyMTY4&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="home-about-image1"
          />
        </div>
        <div className="home-about-content2">
          <div className="home-about-main2">
            <div className="home-about-header2">
              <h2 className="home-about-heading2">
                Connect with experts or take a look at the resources section to
                better understand these disorders
              </h2>
              <p className="home-about-caption">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="home-about-button1">
            <Link to="/resources" className="home-about-navlink2 button">
              <span>RESOURCES</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-about-steps">
        <div className="home-about-content3">
          <div className="home-about-information">
            <div className="home-about-main3">
              <div className="home-about-header3">
                <h2 className="home-about-heading3">
                  Identify Dyslexia, Dyscalculia, Dysgraphia and Attention
                  deficit hyperactivity disorder in school going children early
                  on.
                </h2>
                <p className="home-about-caption1">
                  Follow these steps to get the full use of our website!
                </p>
              </div>
            </div>
            <div className="home-about-button2">
              <Link to="/test" className="home-about-navlink3 button">
                <span>Tests</span>
              </Link>
            </div>
          </div>
          <Steps></Steps>
        </div>
      </section>
      
      <footer className="home-about-footer">
        <div className="home-about-top">
          <Branding></Branding>
          <nav className="home-about-navigation-links"></nav>
        </div>
        <div className="home-about-middle">
          <span className="home-about-text10">
            +91 12345 67890 help@ikshana.com
          </span>
          <span className="home-about-text11">
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
            <br className="home-about-text15"></br>
            <span>Bengaluru - 560 068</span>
          </span>
        </div>
        <div className="home-about-bottom">
          <span className="home-about-copyright">© Ikshana – 2023</span>
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

export default HomeAbout
