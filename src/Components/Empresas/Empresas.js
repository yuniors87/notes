import React from 'react';
import Lista from '../lista/lista';

const Empresas = props => {
  return (
    <Lista
      titulo="Empresas"
      items={props.empresas}
      click={props.click}
      seleccionado={props.seleccionado}
    />
  );
};

export default Empresas;
