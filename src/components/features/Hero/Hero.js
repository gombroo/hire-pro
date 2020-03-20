// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import clsx from 'clsx';
import styles from './Hero.module.scss';

// components
import { ProLogin } from '../ProLogin/ProLogin';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container/';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles(theme => ({
  submit: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Component = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx(styles.hero, styles.darken)}>
        <Container maxWidth="lg">
          <CssBaseline />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <h1 className={styles.pageTitle}>Hire a pro!</h1>
              <h2 className={styles.pageSlogan}>order music for event, web, project</h2>
              <Button className={classes.submit}
                size="lg"
                variant="contained"
              >
                <Link className={classes.link} to={`/prosignup`}>Register and get new jobs</Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProLogin />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

Component.propTypes = {
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
