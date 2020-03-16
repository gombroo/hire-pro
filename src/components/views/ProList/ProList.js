// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './ProList.module.scss';

// components
import { Card } from '../../common/Card/Card';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

// redux
import { connect } from 'react-redux';
import { getAllPros } from '../../../redux/prosRedux.js';

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


const Component = ({ className, professionals }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <Grid item xs={12}>
        <Box className={classes.pageHeader} p={2}>
          <HeadsetOutlinedIcon />
          <Typography variant="h5">All Professionals</Typography>
        </Box>
      </Grid>

      <Container maxWidth="lg">
        <Box pt={4}>
          <Grid container minWidth="200" spacing={6} justify="center">
            {professionals.map(pro => (
              <Grid item key={pro.id}>
                <Card {...pro} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* <Container maxWidth="lg">
        <Box pt={4}>
          <Grid container spacing={5} >
            <Grid item xs={12} sm={6} md={3}>
              {professionals.map(pro => (
                <div key={pro.id}>
                  <Card {...pro} />
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container> */}

    </div>
  );
};

Component.propTypes = {
  professionals: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  professionals: getAllPros(state),
});

const ComponentContainer = connect(mapStateToProps, /*mapDispatchToProps*/)(Component);

export {
  Component as ProList,
  ComponentContainer as ProListContainer,
  Component as ProListComponent,
};
