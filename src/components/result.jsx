import { useState } from 'react';
import Task from './task';

function Result({ tasks = [], onStatusChange }) {
  const [filter, setFilter] = useState('all');

  // Filter tasks based on filter state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="result">
      <h2>Tasks</h2>
      <div className="filter-options">
        <label className="filter-option all">
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
        </label>
        <label className="filter-option active">
          <input
            type="radio"
            name="filter"
            value="active"
            checked={filter === 'active'}
            onChange={() => setFilter('active')}
          />
        </label>
        <label className="filter-option completed">
          <input
            type="radio"
            name="filter"
            value="completed"
            checked={filter === 'completed'}
            onChange={() => setFilter('completed')}
          />
        </label>
      </div>

      <div className="taskContainer">
        {filteredTasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.status}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Result;
