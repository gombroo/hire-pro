// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';

// components
import { Card } from '../../common/Card/Card';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container/';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  cards: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

const Component = ({ className, children }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h4" align="center">
          Featured Musicians
        </Typography>
        <Grid container spacing={5} className={classes.cards}>
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
  Component as FeaturedBoxes,
  // Container as FeaturedBoxes,
  Component as FeaturedBoxesComponent,
};
