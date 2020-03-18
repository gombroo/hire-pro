// react
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// styles
import clsx from 'clsx';
import styles from './ProPage.module.scss';

// components
import { MusicPlayer } from '../../features/MusicPlayer/MusicPlayer';
import { StarRating } from '../../features/StarRating/StarRating';

// material-ui
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

// redux
import { connect } from 'react-redux';
import { getSingleProById /*, reduxActionCreator*/ } from '../../../redux/prosRedux.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 300,
  },
  paper: {
    padding: theme.spacing(3),
  },
  pageHeader: {
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 'bold',
  },
  mainGrid: {
    display: 'flex',
  },
  button: {
    boxShadow: 'none',
  },
}));

const Component = ({ children, className, name, instrument, genre, rating, price, descritpion, image,
  match: {
    params: { id },
  },
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <Grid item xs={12}>
        <Box className={classes.pageHeader} p={2}>
          <HeadsetOutlinedIcon />
          <Typography variant="h5">{name}Pro Page</Typography>
        </Box>
      </Grid>

      <Box p={4}>
        <Grid container spacing={3} className={classes.mainGrid}>

          <Grid item xs={12} sm={12} md={3} className={styles.info}>
            <Card>
              <CardMedia
                className={classes.media}
                image={image}
                title="Johny Zamulony"
              />

              <CardContent>
                <Typography variant="h5" component="h2">
                  Johnny Zamulony
                  {name}
                </Typography>
                <Typography color="textSecondary">
                  drummer
                  {instrument}
                </Typography>
                <Typography variant="button" component="p">
                  Genres: rock, jazz<br />
                  {genre}
                </Typography>
                <StarRating />
                {rating}
                {/* <Typography variant="h4" component="p">
                    <StarIcon color="primary"/>
                    <StarIcon color="primary"/>
                    <StarIcon color="primary"/>
                    <StarBorderIcon color="primary"/>
                    <StarBorderIcon color="primary"/>
                    <StarBorderIcon color="primary"/>
                  </Typography> */}
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">Contact</Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} className={styles.description}>
            <Card>
              <CardContent>
                {descritpion}
                <br />
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
              </CardContent>
            </Card>
            <br />
            <Card>
              <MusicPlayer />
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={3} className={styles.prices}>
            <Card>
              <CardContent>
                <Typography variant='button'>Basic Price: {price} 200 PLN</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Includes separate drum tracks in mp3 format.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">Order Basic</Button>
              </CardActions>

              <CardContent>
                <Typography variant='button'>Standard Price: {price} 300 PLN</Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Includes separate tracks in wav format.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">Order Standard</Button>
              </CardActions>

              <CardContent>
                <Typography variant='button'>Premium Price: {price} 500 PLN</Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Includes separate tracks in WAV format, mixed drums.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">
                  <NavLink to={`/order`}>Order Premium</NavLink>
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  genre: PropTypes.string,
  price: PropTypes.number,
  instrument: PropTypes.string,
  descritpion: PropTypes.string,
  rating: PropTypes.string,
  featured: PropTypes.bool,
  match: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  singlePro: getSingleProById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Component as ProPage,
  Container as ProPageContainer,
  // Component as ProPageComponent,
};
