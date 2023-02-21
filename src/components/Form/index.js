import './style.css';

import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={novaTarefa}
        onChange={handleChange}
        placeholder="Digite o nome da tarefa"
      />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
