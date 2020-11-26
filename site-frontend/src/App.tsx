import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { MainMenu } from './components/main-menu';
import Heroes from './components/heroes/Heroes';

import logo from './images/logo.png';

import './App.css';

import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import PartnershipPage from './pages/PartnershipPage';
import SubscribePage from './pages/SubscribePage';

export function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <img className="logo" src={logo} alt='Подкаст "Цинковый прод"' />
        </Link>

        <Heroes />

        <MainMenu />

        <Route path="/" exact component={IndexPage} />
        <Route path="/partnership" component={PartnershipPage} />
        <Route path="/subscribe" component={SubscribePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
}
