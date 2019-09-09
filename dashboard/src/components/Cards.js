import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(0.4),
    background: '#CECECE',
    height: theme.spacing(18)
  },
}));

function Cards(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [note, setNote] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleChange(value) {
    setNote(value);
  }

  function handleClose(event, id) {
    setAnchorEl(null);
  }

  function handleClickOpenDialog() {
    setOpen(true);
  }

  function handleCloseDialog() {
    setOpen(false);
  }

  return (
    <div>
      <Card className={classes.card}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          color="primary"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onChange={handleChange}
          value={note}
        >
          <MenuItem onClick={handleClose} value={0}>Read</MenuItem>
          <MenuItem onClick={handleClose} value={1}>Edit</MenuItem>
          <MenuItem onClick={() => { handleClickOpenDialog(); handleClose() }} value={props.id}>Delete</MenuItem>
        </Menu>
        <Typography paragraph>
          {props.title}
        </Typography>
      </Card>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"My personal notes"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Do you want delete this note ('{props.title}')</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={() => { props.onDelete(); handleCloseDialog() }} color="primary" autoFocus>Accept</Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default Cards
