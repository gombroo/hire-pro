// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './StarRating.module.scss';

// components

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

// redux
// import { connect } from 'react-reduxyarn';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const labels = {
  0.5: '0,5',
  1: '1',
  1.5: '1,5',
  2: '2',
  2.5: 'OK',
  3: '3',
  3.5: '3,5',
  4: '4',
  4.5: '4,5',
  5: '5',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const Component = ({className, children}) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root, classes.root)}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
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
  Component as StarRating,
  // Container as StarRating,
  Component as StarRatingComponent,
};
