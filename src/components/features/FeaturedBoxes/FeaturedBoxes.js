// react
import React from 'react';
import PropTypes from 'prop-types';

// styles

// components
import { Card } from '../../common/Card/Card';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
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


const Component = ({ featured }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h4" align="center">
        Featured Musicians
      </Typography>
      <Box pt={4}>
        <Grid container spacing={6} justify="center">
          {featured.slice(0, 4).map(pro => (
            <Grid item key={pro.id}>
              <Card {...pro} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

Component.propTypes = {
  featured: PropTypes.array,
};

const mapStateToProps = state => ({
  featured: getFeatured(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Component as FeaturedBoxes,
  Container as FeaturedBoxesContainer,
  //Component as FeaturedBoxesComponent,
};
