import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NewsPreviewCard = ({ title, images, excerpt, webUrl }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Covid19'
          height='140'
          src={`${
            images ? images[0].url : require('../../assets/corona2.jpg')
          }`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' href={webUrl}>
          Go to Original
        </Button>
        <Button
          size='small'
          color='primary'
          //   onClick={() => history.push('/news/1')}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsPreviewCard;
