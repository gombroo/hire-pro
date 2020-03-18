// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Homepage.module.scss';

// components
import Instruments from '../../features/Instruments/Instruments';
import { Hero } from '../../features/Hero/Hero';
import { FeaturedBoxesContainer } from '../../features/FeaturedBoxes/FeaturedBoxes';

// material-ui

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = () => (
  <div className={styles.root}>
    <Hero />
    <FeaturedBoxesContainer />
    <Instruments />
  </div>
);

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
  Component as Homepage,
  // Container as HomepageContainer,
  Component as HomepageComponent,
};
