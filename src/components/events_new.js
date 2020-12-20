import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { postEvent } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: {touched, error } } = field
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push("/")
  }


  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <Button type="submit" style={style} disabled={pristine || submitting || invalid}>Submit</Button>
        <Button style={style} href="/">Cancel</Button>
      </form>
    )
  }
}
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, Please."
  if (!values.body) errors.body = "Enter a body, Please." 
  return errors
}

const mapDispatchToProps = ({ postEvent })
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
