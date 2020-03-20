// react
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// styles
import clsx from 'clsx';

// components
import Hambugrer from '../Hamburger/Hamburger';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const useStyles = makeStyles(theme => ({
  navigation: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  hamburger: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    borderWidth: 2,
    color: '#fff',
    marginRight: theme.spacing(1),
  },
}));

const Component = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hamburger} >
        <Hambugrer />
      </div>
      <nav className={clsx(classes.link, classes.navigation)}>
        <Button
          color="inherit"
          activeClassName='active'
          component={NavLink}
          exact to={`${process.env.PUBLIC_URL}/`}>
          Home
        </Button>
        <Button
          color="inherit"
          activeClassName='active'
          component={NavLink}
          to={`${process.env.PUBLIC_URL}/pros`} >
          All Pros
        </Button>
        <Button
          color="inherit"
          activeClassName='active'
          component={NavLink}
          to={`${process.env.PUBLIC_URL}/order`}>
          Order
        </Button>
        <Button
          className={classes.link}
          color="inherit"
          activeClassName='active'
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
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
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
  // ComponentContainer as PageNavContainer,
  Component as PageNavComponent,
};
