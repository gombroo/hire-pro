// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  button: {
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Component = ({
  singlePro,
  match: {
    params: { proId },
  },
}) => {
  const classes = useStyles();
  const {
    name,
    instrument,
    genre,
    rating,
    price,
    description,
    image,
    email,
  } = singlePro[0];

  return (
    <div className={clsx(styles.root)}>
      <Grid item xs={12}>
        <Box className={classes.pageHeader} p={2}>
          <HeadsetOutlinedIcon />
          <Typography variant="h5">
            {name}
          </Typography>
        </Box>
      </Grid>

      <Box p={4}  display="flex" justifyContent="center">
        <Grid container spacing={3} lg={10} >

          <Grid item xs={12} sm={12} md={3} className={styles.info}>
            <Card>
              <CardMedia
                className={classes.media}
                image={image}
                title={`${name}`}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography color="textSecondary">
                  {instrument}
                </Typography>
                <Typography variant="button" component="p">
                  {genre}
                </Typography>
                <StarRating />
                {rating}
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">
                  <a className={classes.link} href={`mailto:${email}`}>Contact</a>
                </Button>
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
                <Typography paragraph>
                  {description}
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
                <Typography variant='button'>Basic Price: {price}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Includes separate drum tracks in mp3 format.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">
                  <Link className={classes.link} to={`/order`}>Order Basic</Link>
                </Button>
              </CardActions>

              <CardContent>
                <Typography variant='button'>Standard Price: {price}</Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Includes separate tracks in wav format.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">
                  <Link className={classes.link} to={`/order`}>Order Standard</Link>
                </Button>
              </CardActions>

              <CardContent>
                <Typography variant='button'>Premium Price: {price}</Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Includes separate tracks in WAV format, mixed drums.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" fullWidth variant="contained" color="primary">
                  <Link className={classes.link} to={`/order`}>Order Premium</Link>
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
  singlePro: PropTypes.array,
  match: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  genre: PropTypes.string,
  price: PropTypes.number,
  instrument: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.string,
  featured: PropTypes.bool,
  email: PropTypes.string,
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
