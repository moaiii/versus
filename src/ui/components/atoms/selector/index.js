import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
const get = require('lodash.get');

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function BasicSelector({options, pickString, label, handleChangeCallback}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    const selection = event.target.value;
    setValue(selection);
    handleChangeCallback(selection)
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  const _options = options
    .map(option => {
      return {
        displayValue: get(option, pickString),
        option
      }
    })
    .map(({displayValue, option}, i) => {
      return (
        <MenuItem
          index={i}
          key={displayValue}
          value={option}>
          {displayValue}
        </MenuItem>
      );
    });

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="controlled-open-select">{label}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'value',
            id: 'controlled-open-select',
          }}
        >
          {_options}
        </Select>
      </FormControl>
    </form>
  );
}

export default BasicSelector;{}