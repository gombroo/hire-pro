// react
import React from 'react';
import PropTypes from 'prop-types';

// styles

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
import { connect } from 'react-redux';
import { getSingleProById } from '../../../redux/prosRedux.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 250,
  },
  media: {
    height: 180,
  },
  button: {
    boxShadow: 'none',
  },
}));


const Component = ({name, instrument, genre, price, image }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Musician Photo"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography color="textSecondary">
              {instrument}
            </Typography>
            <Typography variant="subtitle1" component="p">
              { price }
            </Typography>
            <Typography variant="button" component="p">
              {genre}
            </Typography>
            <StarRating />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" fullWidth variant="outlined" color="inherit">More Info</Button>
          <Button  size="small" variant="contained" color="primary" className={classes.button}>Order</Button>
          <IconButton color="primary" aria-label="add to shopping cart">
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  genre: PropTypes.string,
  price: PropTypes.number,
  instrument: PropTypes.string,
};

const mapStateToProps = (state) => ({
  singlePro: getSingleProById(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Component as Card,
  Container as CardContainer,
  Component as CardComponent,
};
