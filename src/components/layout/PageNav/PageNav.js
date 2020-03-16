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
  link: {
    borderWidth: 2,
    color: '#fff',
    marginRight: theme.spacing(1),
  },
}));

const Component = ({ className, children }) => {
  const classes = useStyles();

  return (
    <nav className={clsx(styles.navigation, classes.link)}>
      <Button
        color="inherit"
        component={NavLink}
        exact to={`${process.env.PUBLIC_URL}/`}>
        Home
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/professionals`} >
        All Pros
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/pro/:id`}>
        Pro Page
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/order`}>
        Order
      </Button>
      <Button
        className={classes.link}
        color="inherit"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/contact`}>
        Contact
      </Button>
      <Button
        className={classes.link}
        variant="outlined"
        color="inherit"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/prologin`}>
        Login
      </Button>
      <Button
        className={classes.link}
        variant="outlined"
        color="inherit"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/prosignup`}>
        Signup
      </Button>
    </nav>

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
  // ComponentContainer as PageNav,
  Component as PageNavComponent,
};
