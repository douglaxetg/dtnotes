import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0.3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

function Controltools(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        <Grid container alignItems="center" justify="center" item xs={12} md={3}>
          <Fab size="medium" variant="extended" color="primary" aria-label="add" className={classes.margin}><AddIcon className={classes.extendedIcon} />New</Fab>
        </Grid>
        <Grid container justify="center" item xs={12} md={3} >
          <TextField
            fullWidth
            style={{ margin: 8 }}
            id="outlined-search"
            label="Filter"
            type="search"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Controltools
