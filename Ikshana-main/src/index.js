import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import HomeAbout from './views/home-about'
import Test from './views/test'
import Dyscalculia from './views/dyscalculia'
import Resources from './views/resources'
import ADHD from './views/adhd'
import Connect from './views/connect'
import Register from './views/register'
import Dyslexia from './views/dyslexia'
import Login from './views/login'
import Dysgraphia from './views/dysgraphia'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={HomeAbout} exact path="/" />
        <Route component={Test} exact path="/test" />
        <Route component={Dyscalculia} exact path="/dyscalculia" />
        <Route component={Resources} exact path="/resources" />
        <Route component={ADHD} exact path="/adhd" />
        <Route component={Connect} exact path="/connect" />
        <Route component={Register} exact path="/register" />
        <Route component={Dyslexia} exact path="/dyslexia" />
        <Route component={Dysgraphia} exact path="/dysgraphia" />
        <Route component={Login} exact path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
