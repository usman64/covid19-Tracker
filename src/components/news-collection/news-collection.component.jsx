import React from 'react';
import NewsPreviewCard from '../news-preview-card/news-preview-card.component';
import Grid from '@material-ui/core/Grid';
// import { NEWS } from '../../redux/news/news.data.js';
import { connect } from 'react-redux';

import './news-collection.styles.scss';

const NewsCollection = ({ isHomepage, news_data, isLoading }) => {
  return (
    <div className='news-collection'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='stretch'
        spacing={3}
      >
        {isLoading ? (
          <div> ...Loading</div>
        ) : isHomepage ? (
          news_data
            .filter((newsItem, key) => key < 8)
            .map((newsItem, key) => (
              <Grid item xs={10} sm={5} md={4} lg={3} key={key}>
                <NewsPreviewCard {...newsItem} />
              </Grid>
            ))
        ) : (
          news_data.map((newsItem, key) => (
            <Grid item xs={10} sm={5} md={4} lg={3} key={key}>
              <NewsPreviewCard {...newsItem} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.news.isLoading,
  error: state.news.error,
  news_data: state.news.news_data,
});

export default connect(mapStateToProps)(NewsCollection);
