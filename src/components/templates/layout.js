import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../layout/top-bar';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
  },
})

function Layout(props){
  const { classes } = props;

  return(
    <Fragment>
      <TopBar/>
      <main className={classes.content}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default withStyles(styles)(Layout);