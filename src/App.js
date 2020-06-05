import React from 'react';

import './App.css';
import AlertHeader from './components/alert-header/alert-header.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home-page.component';
import StatsPage from './pages/stats/stats-page.component';
import NewsPage from './pages/news/news-page.component';

function App() {
  return (
    <div className='App'>
      <AlertHeader />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/stats' component={StatsPage} />
        <Route path='/news' component={NewsPage} />
      </Switch>
      <Footer className='App-footer' />
    </div>
  );
}

export default App;
