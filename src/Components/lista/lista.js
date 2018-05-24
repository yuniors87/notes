import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import utils from '../../utils/parametros';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  fondo: {
    background: utils.headerBackgroundColor,
    color: utils.headerFontColor,
    textAlign: 'center',
    fontSize: '1.7rem'
  },
  lista: {
    borderRight: utils.listBorderRight,
    height: '100%'
  },
  seleccionado: {
    background: utils.listaItemSeleccionadoBackground
  }
});

const Lista = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List
        className={classes.lista}
        component="nav"
        subheader={
          <ListSubheader disableSticky={false} className={classes.fondo}>
            Lista
          </ListSubheader>
        }
      >
        {Object.keys(props.items).map(key => (
          <ListItem
            button
            divider={true}
            key={key}
            onClick={() => props.click(key)}
            className={
              props.seleccionado === key ? classes.seleccionado : ''
            }
          >
            <ListItemText
              primary={props.items[key].nombreCorto}
              secondary={props.items[key].name}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

Lista.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Lista);
