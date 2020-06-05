import React from 'react';
import NewsPreviewCard from '../news-preview-card/news-preview-card.component';
import Grid from '@material-ui/core/Grid';
import { NEWS } from '../../redux/news/news.data.js';

import './news-collection.styles.scss';

const NewsCollection = () => {
  return (
    <div className='news-collection'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='stretch'
        spacing={3}
      >
        {NEWS.news.map((newsItem, key) => (
          <Grid item xs={11} sm={5} md={4} lg={3} key={key}>
            <NewsPreviewCard {...newsItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewsCollection;
