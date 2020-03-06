// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './Hero.module.scss';

// components
import { ProLogin } from '../ProLogin/ProLogin';
// import { Search } from '../../common/Search/Search';

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container/';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx(styles.hero, styles.darken)}>
        <Container maxWidth="lg">
          <CssBaseline />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <h1 className={styles.pageTitle}>Hire a pro!</h1>
              <h2 className={styles.pageSlogan}>order music for event, web, project</h2>
              {/* <h2 className={styles.pageSlogan}>find the perfect music service for your needs</h2> */}
              <Button disableElevation variant="contained" color="secondary" size="lg">
                Register and get new jobs
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProLogin />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>

  // <Container maxWidth="lg">
  //   <Grid container spacing={3}>
  //     <Grid item xs={12} sm={6}>
  //       <Paper className={styles.hero}>
  //         <form noValidate autoComplete="off">
  //           <TextField
  //             id="outlined-basic"
  //             label="Search"
  //             variant="outlined"
  //           />
  //         </form>
  //       </Paper>
  //     </Grid>
  //   </Grid>
  // </Container>
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
  Component as Hero,
  // Container as Hero,
  Component as HeroComponent,
};
