import './Main.css';

import React, { Component } from 'react';

import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1)
      return alert('Tarefa já cadastrada');

    if (novaTarefa === '') return alert('Digite uma tarefa');

    if (index === -1) {
      this.setState({
        tarefas: [...tarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: novasTarefas,
        index: -1,
        novaTarefa: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: novasTarefas,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({ index, novaTarefa: tarefas[index] });
  };

  componentDidMount() {
    const tarefas = localStorage.getItem('tarefas');

    if (tarefas) {
      this.setState({ tarefas: JSON.parse(tarefas) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
