import { useState, useEffect } from 'react';

function Task({ id, name, status: initialStatus, onStatusChange }) {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const toggleStatus = () => {
    const newStatus = status === 'active' ? 'completed' : 'active';
    setStatus(newStatus);
    onStatusChange(id, newStatus);
  };

  return (
    <div className="task">
      <h2>{name}</h2>
      <input
        type="checkbox"
        checked={status === 'completed'}
        onChange={toggleStatus}
      />
    </div>
  );
}

export default Task;
