import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    flexGrow: 1,
    
  },
  grow: {
    flexGrow:1
  },
  menuButton: {
    marginLeft: -500,
    marginRight: 20,
  },
  menuProfile: {
      marginRight:1500,
      marginLeft:10
  },
  menuHome: {
    marginRight:10,
    marginLeft:20
}
};


class NavBar extends Component{
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render(){
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
           Project
          </Typography>
          <Link component="button" variant="body2" color="inherit" className={classes.menuHome}>
            Home
          </Link>
          <Link component="button" variant="body2" color="inherit" className={classes.menuProfile}>
            Profile
          </Link>
          <Button className={classes.menuButton} color="inherit" onClick={this.handleClickOpen} >Login</Button>
        </Toolbar>
      </AppBar>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input Email Address and password
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
    </div>
    );
  }
}



export default withStyles(styles)(NavBar);