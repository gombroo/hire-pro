// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

// styles
import clsx from 'clsx';
import styles from './MenuBar.module.scss';

// components
import { PageNav } from '../PageNav/PageNav';

// material-ul
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Component = ({className, children}) => {
  const classes = useStyles();

  return(
    <div className={clsx(className, styles.root)}>
      <AppBar disableElevation position="static">
        <Toolbar>
          <RouterLink to="/" color="inherit">
            <Icon edge="start" className={classes.menuButton} color="inherit">
              <HeadsetOutlinedIcon />
            </Icon>
          </RouterLink>
          <Typography variant="h6" className={classes.title}>
            Hire Music Pro
          </Typography>
          <PageNav />
          <IconButton aria-label="search" color="inherit" >
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MenuBar,
  // Container as Footer,
  Component as MenuBarComponent,
};
