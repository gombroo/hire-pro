// react
import React from 'react';
//import PropTypes from 'prop-types';

// styles
import styles from './Header.module.scss';

// components
import { MenuBar } from '../MenuBar/MenuBar';

// material-ui

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = props => (
  <header className={styles.root}>
    <MenuBar />
  </header>
);

// Component.propTypes = {
//   children: PropTypes.node,
// };

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
