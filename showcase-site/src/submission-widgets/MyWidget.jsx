import React, { useState, useEffect } from 'react';
import './Petodo.css';
import catFull from './MyAssets/love.png';
import catHungry from './MyAssets/fish.png';
import catDead from './MyAssets/died.png';

const PetodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDueDate, setEditDueDate] = useState('');
  const [catImage, setCatImage] = useState(catFull);
  const [statusText, setStatusText] = useState('');
  const [showStatusText, setShowStatusText] = useState(false);
  const [isTempHappy, setIsTempHappy] = useState(false);

  // cat
  useEffect(() => {
    if (isTempHappy) return;

    const now = new Date();

    const hasOverdue = tasks.some(task => {
      if (!task.dueDate) return false;
      const due = new Date(task.dueDate);
      return due < now;
    });

    if (hasOverdue) {
      setCatImage(catDead);
      triggerStatusText("The cat is dead because of hunger.");
      return;
    }

    const hasTasks = tasks.length > 0;
    if (hasTasks) {
      setCatImage(catHungry);
      triggerStatusText("The cat wants some fish!");
      return;
    }

    setCatImage(catFull);
    triggerStatusText("The cat is happily alive.");
  }, [tasks, isTempHappy]);

  // cc
  const triggerStatusText = (text) => {
    setStatusText(text);
    setShowStatusText(true);
    setTimeout(() => setShowStatusText(false), 3000);
  };

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

  // tik
  const deleteTask = (id) => {
    setTasks(prev => {
      const newTasks = prev.filter(task => task.id !== id);

      setIsTempHappy(true);
      setCatImage(catFull);
      triggerStatusText("You feed the cat");

      setTimeout(() => {
        setIsTempHappy(false);
      }, 3000); // 🕒 3秒

      return newTasks;
    });
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setEditDueDate(task.dueDate || '');
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTasks(prev => prev.map(task =>
      task.id === id
        ? { ...task, text: editText.trim(), dueDate: editDueDate }
        : task
    ));
    setEditingId(null);
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
    <div className="petodo-container relative">
      <h1 className="petodo-title">PETodo</h1>

      {/* show cat */}
      <div className="cat-status text-center">
        <img src={catImage} alt="cat-status" className="cat-hungry mx-auto" />
      </div>

      {/* add list */}
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
        />
        <button
          type="submit"
          className="add-button"
          disabled={!newTask.trim()}
        >
          Add
        </button>
      </form>

      {/* todo list */}
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
                      📅 {formatDate(task.dueDate) || 'Invalid'}
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

      {/* nothing to do */}
      {tasks.length === 0 && (
        <div className="empty-state">You finished all tasks! Good job!</div>
      )}

      {/* cc bottom */}
      {showStatusText && (
        <div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-50 border border-yellow-400 shadow-md px-4 py-2 rounded-xl text-gray-800 text-sm animate-fade-in"
          style={{ zIndex: 10 }}
        >
          {statusText}
        </div>
      )}

      {/* style */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default PetodoList;
