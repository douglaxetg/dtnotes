import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Mainbar from './Mainbar'
import Controltools from './Controltools'
import Paper from '@material-ui/core/Paper';
import Footer from '../components/Footer'
import List from '../components/List'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: 8,
  },
  divider: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={12} sm={12}>
          <Mainbar />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Controltools />
            <Divider className={classes.divider} />
            <List />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard
