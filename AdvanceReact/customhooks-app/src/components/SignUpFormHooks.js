import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useForm } from '../hooks/useForm.js';


import Button from '../theme/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function SignupForm() {
  const classes = useStyles();
  // const [username, email,  handleChanges, clearForm] = useForm();
  const [values, handleChanges, clearForm] = useForm();//Refactored

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div p={2} className="form">
        <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client with Basic Custom Hooks</legend>
          <TextField
            id="outlined-name"
            label="Username"
            name='username'
            className={classes.textField}
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            name='email'
            className={classes.textField}
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
