import React from 'react';
import Lista from '../lista/lista';

const Sistemas = props => {
  return (
    <Lista
      titulo="Sistemas"
      items={props.sistemas}
      click={props.click}
      seleccionado={props.seleccionado}
    />
  );
};

export default Sistemas;
