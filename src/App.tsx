import React from 'react';

import Home from './paginas/Home';
import './App.css';
import { Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);


function App() {

  const classes = useStyles();

  return (
    <>
      <Home />
      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>


    </>


  );
}

export default App;
