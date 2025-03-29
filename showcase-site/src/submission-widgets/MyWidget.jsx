import React, { useState, useEffect } from 'react';
import './Petodo.css';
import catFull from './MyAssets/love.png';
import catHungry from './MyAssets/fish.png';

const PetodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDueDate, setEditDueDate] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks(prev => [...prev, {
        id: Date.now(),
        text: newTask.trim(),
        dueDate,
        completed: false
      }]);
      setNewTask('');
      setDueDate('');
    }
  };

  const toggleComplete = (id) => {
    deleteTask(id);
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setEditDueDate(task.dueDate || '');
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;

    setTasks(prev => prev.map(task =>
      task.id === id ? {
        ...task,
        text: editText.trim(),
        dueDate: editDueDate
      } : task
    ));
    setEditingId(null);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const formatDate = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      return isNaN(date) ? '' : date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    } catch {
      return '';
    }
  };

  return (
    <div className="petodo-container">
      <h1 className="petodo-title">PETodo</h1>

      <p> <img src={catHungry} alt="cat-hungry" className="cat-hungry"/>
      </p>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task..."
          className="task-input"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-input"
          min={new Date().toISOString().split('T')[0]}
        />
        <button
          type="submit"
          className="add-button"
          disabled={!newTask.trim()}>
          Add
        </button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
            data-testid="task-item"
          >
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={() => deleteTask(task.id)}
                className="task-checkbox"
              />
            </label>

            <div className="task-content">
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                    required
                  />
                  <input
                    type="date"
                    value={editDueDate}
                    onChange={(e) => setEditDueDate(e.target.value)}
                    className="edit-input"
                  />
                </>
              ) : (
                <>
                  <div className="task-text">{task.text}</div>
                  {task.dueDate && (
                    <div className="due-date">
                      📅 {formatDate(task.dueDate) || 'invalid'}
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="action-buttons">
              {editingId === task.id ? (
                <button
                  onClick={() => saveEdit(task.id)}
                  className="save-button"
                  disabled={!editText.trim()}
                >
                  save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(task)}
                  className="edit-button"
                >
                  edit
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <div className="empty-state">You finished all tasks! Good job!</div>
      )}
    </div>
  );
};

export default PetodoList;