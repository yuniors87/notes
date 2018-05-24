import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import base from '../../Config/base';
import Empresas from '../Empresas/Empresas';
import Sistemas from '../Sistemas/Sistemas';

class App extends Component {
  constructor() {
    super();

    this.seleccionarEmpresa = this.seleccionarEmpresa.bind(this);
    this.traerSistemas = this.traerSistemas.bind(this);
    this.seleccionarSistema = this.seleccionarSistema.bind(this);

    this.state = {
      empresas: {},
      empresaSeleccionada: '',
      sistemas: {},
      sistemaSeleccionado: ''
    };
  }
  componentWillMount() {
    this.ref = base.syncState(`/empresas`, {
      context: this,
      state: 'empresas'
    });
  }

  seleccionarEmpresa(key) {
    this.setState({ empresaSeleccionada: key });
    this.traerSistemas(key);
  }
  traerSistemas(keyEmpresa) {
    this.ref = base.syncState(`/sistemas`, {
      context: this,
      state: 'sistemas',
      queries: {
        orderByChild: 'empresaKey',
        equalTo: Number(keyEmpresa)
      }
    });
  }

  seleccionarSistema(key) {
    this.setState({ sistemaSeleccionado: key });
  }

  render() {
    return (
      <div className="App">
        <Empresas
          empresas={this.state.empresas}
          click={this.seleccionarEmpresa}
          seleccionado={this.state.empresaSeleccionada}
        />
        <Sistemas
          sistemas={this.state.sistemas}
          click={this.seleccionarSistema}
          seleccionado={this.state.sistemaSeleccionado}
        />
      </div>
    );
  }
}

export default App;
