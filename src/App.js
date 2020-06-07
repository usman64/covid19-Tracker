import React, { lazy, Suspense } from 'react';

import './App.css';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer.component';

// import HomePage from './pages/home/home-page.component';
import StatsPage from './pages/stats/stats-page.component';
import NewsPage from './pages/news/news-page.component';
import NotFound404 from './pages/not-found-404/not-found-404.component';
import WhatIsCovidPage from './pages/what-is-covid/what-is-covid.component';
import Spinner from './components/spinner/spinner.component';
import { connect } from 'react-redux';
import { getNews } from './redux/news/news.actions';
import { getStatsByCountry } from './redux/stats/stats.actions';

const HomePage = lazy(() => import('./pages/home/home-page.component'));
// const StatsPage = lazy(() => import('./pages/stats/stats-page.component'));
// const NewsPage = lazy(() => import('./pages/news/news-page.component'));
// const WhatIsCovidPage = lazy(() =>
//   import('./pages/what-is-covid/what-is-covid.component')
// );
// const NotFound404 = lazy(() =>
//   import('./pages/not-found-404/not-found-404.component')
// );

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNews());
    this.props.dispatch(getStatsByCountry('PK'));
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='app-body'>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/stats' component={StatsPage} />
              <Route path='/what-is-covid' component={WhatIsCovidPage} />
              <Route path='/news' component={NewsPage} />
            </Suspense>
            <Route path='/*' component={NotFound404} />
          </Switch>
        </div>
        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null)(App);
