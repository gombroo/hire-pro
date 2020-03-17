// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './Contact.module.scss';

// components

// material-ui
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import MailIcon from '@material-ui/icons/Mail';


// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


// const Component = ({className, children}) => (
//   <div className={clsx(className, styles.root)}>
//     <h2>Contact</h2>
//     {children}
//   </div>
// );

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 5,
    padding: '20px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5),
    boxShadow: 'none',
  },
});


class Contact extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={clsx(styles.root)}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} >
              <MailIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact us
            </Typography>

            <form className={classes.form} noValidate>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" type="text" />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="email">Message</InputLabel>
                <Input id="email" multiline rows={10} />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

Contact.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

// export {
//   Component as Contact,
//   // Container as Contact,
//   Component as ContactComponent,
// };

export default withStyles(useStyles)(Contact);
