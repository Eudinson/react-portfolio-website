import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Skills from './components/Sections/Skills/Skills';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import PageNotFound from './components/Sections/PageNotFound/PageNotFound';

import './App.css';

const App = () => {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </div>

  )
}

export default App;
