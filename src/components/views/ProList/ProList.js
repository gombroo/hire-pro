// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './ProList.module.scss';

// components
import { Card } from '../../common/Card/Card';

// material-ui
import Container from '@material-ui/core/Container/';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" bgcolor="secondary.light" color="secondary.contrastText"
          fontWeight="fontWeightBold"
          p={2}
        >
          <HeadsetOutlinedIcon />
          <Typography variant="h5">All Professionals</Typography>
        </Box>
      </Grid>
      <Container maxWidth="lg">
        <Box pt={4}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
        </Grid>
      </Container>
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
  Component as ProList,
  // Container as MusiciansList,
  Component as ProListComponent,
};
