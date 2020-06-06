import React from 'react';

import './App.css';
// import AlertHeader from './components/alert-header/alert-header.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home-page.component';
import StatsPage from './pages/stats/stats-page.component';
import NewsPage from './pages/news/news-page.component';
import NotFound404 from './pages/not-found-404/not-found-404.component';
import WhatIsCovidPage from './pages/what-is-covid/what-is-covid.component';

class App extends React.Component {
  // async componentWillMount() {
  //   try {
  //     const resp = await fetch(
  //       'https://api.smartable.ai/coronavirus/news/global',
  //       {
  //         headers: {
  //           'Subscription-Key': '0ce8a0c4bc8849028b6824aa3193b952',
  //         },
  //       }
  //     );
  //     const respJSON = await resp.json();
  //     console.log(respJSON.news);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  render() {
    return (
      <div className='App'>
        {/* <AlertHeader /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/stats' component={StatsPage} />
          <Route path='/what-is-covid' component={WhatIsCovidPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='*' component={NotFound404} />
        </Switch>
        <Footer className='App-footer' />
      </div>
    );
  }
}

export default App;
