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
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// redux
import { connect } from 'react-redux';
import { getFeatured } from '../../../redux/prosRedux';


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


const Component = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>

      <Container maxWidth="lg">
        <Box pt={4}>
          <Grid container minWidth="200" spacing={6} justify="center">
            {/* {featured.map(pro => (
              <Grid item key={pro.id}>
                <Card {...pro} />
              </Grid>
            ))} */}
          </Grid>
        </Box>
      </Container>

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
  featuredPros: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  featured: getFeatured(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps, /*mapDispatchToProps*/)(Component);

export {
  Component as FeaturedBoxes,
  ComponentContainer as FeaturedBoxesContainer,
  Component as FeaturedBoxesComponent,
};
