import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Empresa extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange('name')}
          value={this.state.name}
        />
        <TextField
          id="with-placeholder2"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange('name')}
          value={this.state.name}
        />
      </form>
    );
  }
}

Empresa.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Empresa);
