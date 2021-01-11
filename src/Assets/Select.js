import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//import {countries} from '../data.js'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectAdjust: {
    width: 220
  }
}));

export default function SimpleSelect({
    label,
    value,
    onChange,
    data

}) {


  const classes = useStyles();
/*  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

*/



  return (
    <div>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          label={label}
          className={classes.selectAdjust}
        >

{data.map(item =>
          <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
)
}

        </Select>
      </FormControl>

    </div>
  );
}
