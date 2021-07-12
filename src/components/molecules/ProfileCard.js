import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Header from '../atoms/Header';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
  button: {
    display: 'flex',
    justifyContent : 'center'
  }
});

export function ProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/abhishek.jpg"
          title="Abhishek Yelisetti"
        />
        <CardContent>
          <Header variant="h5" align="center" data="Abhishek Yelisetti" />
          <Header variant="h6" color="textSecondary" component="p" align="center" data="Software Developer"/>
          <Header variant="h6" color="textSecondary" component="p" align="center" data="Hyderabad,Telanagana,India" />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button variant="contained" color="primary" >
          Message
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;