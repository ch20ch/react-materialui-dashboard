import React from 'react';
import { connect } from 'react-redux';
import { addLeave } from '../actions';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Button,
  Grid,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';


const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

let AddLeave = ({ dispatch }) => {
  let input;
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Personal Request of Leave Form 
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="startDate"
                    component={TextField}
                    type="text"
                    label="Start Date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="endDate"
                    component={TextField}
                    type="text"
                    label="End Date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="Leave Type"
                    component={Select}
                    label="Select the leave type "
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="Casual">Casual</MenuItem>
                    <MenuItem value="Sick">Sick</MenuItem>
                    <MenuItem value="Paternity">
                      Paternity
                    </MenuItem>
                    <MenuItem value="Maternity">
                      Maternity
                    </MenuItem>
                    <MenuItem value="Bereavement">
                      Bereavement
                    </MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="reason"
                    component={TextField}
                    multiline
                    label="Reason"
                  />
                </Grid>        
                <Grid item xs={12}>
                  <FormControlLabel
                    label="Planned"
                    control={
                      <Field
                        name="Planned"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="duration"
                    component={TextField}
                    multiline
                    label="Duration"
                  />
                </Grid> 
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
                
              </Grid>
            </Paper>
            
          </form>
        )}
      />
    </div>
  );
 /*  return (
      <FormGroup
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addLeave(input.value));
            input.value = '';
          }}>
          <FormControl>
            <InputLabel htmlFor="my-input">Leave</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">leave title.</FormHelperText>
          </FormControl>
          <FormControl>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </FormControl>
      </FormGroup>
   /*  <Form
     
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add Leave</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form> 
  ); */
};
AddLeave = connect()(AddLeave);

export default AddLeave;