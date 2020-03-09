// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './Card.module.scss';

// components
import { StarRating } from '../../features/StarRating/StarRating';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 160,
  },
  paper: {
    padding: theme.spacing(5),
  },
}));

const Component = ({className, children}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/876714/pexels-photo-876714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Musician Photo"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Johnny Zamulony
            </Typography>
            <Typography color="textSecondary">
              drummer
            </Typography>
            <Typography variant="subtitle1" component="p">
              Price: from 200 PLN<br/>
            </Typography>
            <Typography variant="button" component="p">
              Genres: rock, jazz<br/>
            </Typography>
            <StarRating />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" fullWidth variant="outlined" color="inherit">More Info</Button>
          <Button disableElevation size="small" variant="contained" color="primary">Order</Button>
          <IconButton color="primary" aria-label="add to shopping cart">
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Card,
  // Container as Card,
  Component as CardComponent,
};
