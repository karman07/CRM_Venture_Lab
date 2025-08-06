import React, { createContext, useContext } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const tasks = [
    {
      name: 'Research Work',
      dueDate: '2024-12-11',
      description: 'Do the Editing and research work for the start up',
      assignedBy: 'Mr Kanishk Dadwal',
      remarks: '',
      completed: false,
    },
    {
      name: 'Research Work',
      dueDate: '2024-12-11',
      description: 'Do the Editing and research work for the start up',
      assignedBy: 'Mr Pratham Anand',
      remarks: '',
      completed: false,
    },
  ];

  return (
    <TasksContext.Provider value={{ tasks }}>
      {children}
    </TasksContext.Provider>
  );
};
