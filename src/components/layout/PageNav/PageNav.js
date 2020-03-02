// react
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// styles
import clsx from 'clsx';
import styles from './PageNav.module.scss';

// components

// material-ui
import Button from '@material-ui/core/Button';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <nav>
      <Button className={styles.link} color="inherit" component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/musicians`} activeClassName='active'>Musicians</Button>
      <Button className={styles.link} color="inherit" component={NavLink} to={`${process.env.PUBLIC_URL}/order`} activeClassName='active'>Order</Button>
    </nav>
  </div>
);

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
