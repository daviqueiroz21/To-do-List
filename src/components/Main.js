import './Main.css';

//Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import React, { Component } from 'react';

//Form
import { FaPlus } from 'react-icons/fa';

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

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main" onSubmit={this.handleSubmit}>
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
            type="text"
            value={novaTarefa}
            onChange={this.handleChange}
            placeholder="Digite o nome da tarefa"
          />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <span className="buttons-tarefas">
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
