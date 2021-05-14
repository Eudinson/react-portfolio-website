import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import PageNotFound from './components/Sections/PageNotFound';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/skills' component={ Skills } />
          <Route exact path='/projects' component={ Projects } />
          <Route exact path='/contact' component={ Contact } />
          <Route path='*' component={ PageNotFound } />
        </Switch>
        <Footer />
    </div>

  )
}

export default App;
