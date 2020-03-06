// react
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// styles
import clsx from 'clsx';
import styles from './PageNav.module.scss';

// components

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  link: {
    borderWidth: 2,
    color: '#fff',
    marginRight: theme.spacing(1),
  },
}));

const Component = ({className, children}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <nav>
        <Button className={classes.link} color="inherit" component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
        <Button className={classes.link} color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/professionals`} activeClassName='active'>All Pros</Button>
        <Button className={classes.link} color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/pro`} activeClassName='active'>Pro Page</Button>
        <Button className={classes.link} color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/order`} activeClassName='active'>Order</Button>
        <Button className={classes.link} variant="outlined" color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/prologin`} activeClassName='active'>Login</Button>
        <Button className={classes.link} variant="outlined" color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/prosignup`} activeClassName='active'>Signup</Button>
      </nav>
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
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent,
};
