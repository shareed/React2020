import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useInput } from '../hooks/useInput.js';

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

export default function SignupFormHooks1() {
  const classes = useStyles();
  const [username, , handleUsername] = useInput('', 'username');
  const [email, , handleEmail] = useInput('', 'email');
  const [role, , handleRole] = useInput('', 'role');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client with Custom Hooks Refactored</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={username}
            onChange={handleUsername}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            value={email}
            onChange={handleEmail}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Role"
            className={classes.textField}
            value={role}
            onChange={handleRole}
            margin="normal"
            variant="outlined"
          />
          <Button color="blue" type="submit">
            Submit
          </Button>
        </fieldset>
      </form>

    </div>
  );
}
