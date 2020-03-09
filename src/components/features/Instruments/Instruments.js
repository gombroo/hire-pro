// react
import React from 'react';
import PropTypes from 'prop-types';

// styles

// components

// material-ui
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8),
  },
  images: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    margin: 4,
    borderRadius: 0,
    height: '23vh',
    width: '33.3333%',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '2px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    borderRadius: 3,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '0.875rem',
    letterSpacing: '0.02857em',
    background: 'rgba(0, 0, 0, 0.66);',
  },
});

function Instruments(props) {
  const { classes } = props;
  const images = [
    {
      url:
        'https://images.pexels.com/photos/675960/mic-music-sound-singer-675960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Singers',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Guitarists',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Bass Players',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/730656/pexels-photo-730656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Drummers',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Piano Players',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Violin Players',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/462510/pexels-photo-462510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Cellists',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Saxophonists',
      width: '32.5%',
    },
    {
      url:
        'https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'DJs',
      width: '32.5%',
    },
  ];

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" component="h2">
        Choose instrumentalist
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

Instruments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instruments);
