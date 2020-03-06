// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './Homepage.module.scss';

// components
import { FeaturedBoxes } from '../../features/FeaturedBoxes/FeaturedBoxes';
import Instruments from '../../features/Instruments/Instruments';
import { Hero } from '../../features/Hero/Hero';

// material-ui

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Hero />
    <FeaturedBoxes />
    <Instruments />
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
