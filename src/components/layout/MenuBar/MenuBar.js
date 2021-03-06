// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

// styles

// components
import { PageNav } from '../PageNav/PageNav';

// material-ul
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
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
    color: theme.palette.secondary.main,
  },
  logo: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: 3,
    fontSize: 50,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  icons: {
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.main,
    },
  },
}));


const Component = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <RouterLink to="/" color="inherit">
            <Icon edge="start" className={classes.menuButton} color="inherit">
              <HeadsetOutlinedIcon className={classes.logo}/>
            </Icon>
          </RouterLink>
          <Typography variant="h6" className={classes.title}>
            Hire Music Pro
          </Typography>

          <PageNav />

          <IconButton className={classes.icons} aria-label="search" color="inherit" >
            <ShoppingBasketIcon />
          </IconButton>
          <IconButton className={classes.icons}  edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MenuBar,
  // Container as MenuBar,
  Component as MenuBarComponent,
};
