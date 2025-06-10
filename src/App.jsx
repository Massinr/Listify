import { useState, useEffect } from 'react';
import './App.css';
import Creationfield from './components/creationField';
import Result from './components/result';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addTask = (name) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: Date.now(),
        name,
        status: 'active'
      }
    ]);
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className="loader">
  <div className="loader-text" aria-label="Listify" role="text">
    <span>L</span><span>i</span><span>s</span><span>t</span><span>i</span><span>f</span><span>y</span>
  </div>
</div>
      )}
      {/* Main content (displayed after loading) */}
      <h1 id="bigTitle">Listify</h1>
      <Creationfield onCreate={addTask} />
      <Result tasks={tasks} onStatusChange={updateTaskStatus} />
    </div>
  );
}

export default App;
