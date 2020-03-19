// react
import React from 'react';
import PropTypes from 'prop-types';

// styles

// components
import { Card } from '../../common/Card/Card';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

// redux
import { connect } from 'react-redux';
import { getAllPros, fetchAllPros } from '../../../redux/prosRedux.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  pageHeader: {
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 'bold',
  },
}));

const Component = ({ professionals }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12}>
        <Box className={classes.pageHeader} p={2}>
          <HeadsetOutlinedIcon />
          <Typography variant="h5">All Professionals</Typography>
        </Box>
      </Grid>
      <Box pt={4}>

        <Grid container spacing={6} justify="center">
          {professionals.map(pro => (
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
  professionals: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  professionals: getAllPros(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPros: () => fetchAllPros(),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProList,
  Container as ProListContainer,
  //Component as ProListComponent,
};
