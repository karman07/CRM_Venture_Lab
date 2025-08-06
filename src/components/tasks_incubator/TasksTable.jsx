import React, { useState } from 'react';
import { useTasks } from '../../context/TasksContext';
import { FaEdit } from 'react-icons/fa';

const TasksTable = () => {
  const { tasks } = useTasks();
  const [completedTasks, setCompletedTasks] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tasks.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = rowsPerPage === 'All' ? tasks.length : startIndex + rowsPerPage;
  const currentTasks = rowsPerPage === 'All' ? tasks : tasks.slice(startIndex, endIndex);

  const handleCompleteToggle = (index) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleRowsPerPageChange = (e) => {
    const value = e.target.value === 'All' ? 'All' : parseInt(e.target.value);
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-xl overflow-hidden p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3 text-left">Task Name</th>
              <th className="px-4 py-3 text-left">Due Date</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Assigned By</th>
              <th className="px-4 py-3 text-left">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentTasks.map((task, idx) => (
              <tr
                key={idx}
                className={`${completedTasks[startIndex + idx] ? 'bg-green-50' : ''}`}
              >
                <td className="px-4 py-3 font-semibold">{task.name}</td>
                <td className="px-4 py-3">{task.dueDate}</td>
                <td className="px-4 py-3">{task.description}</td>
                <td className="px-4 py-3">{task.assignedBy}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  {task.remarks || '-'}
                  <FaEdit className="text-gray-500 hover:text-blue-600 cursor-pointer text-xs" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <label htmlFor="rowsPerPage">Rows per page:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {[10, 20, 50, 'All'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ←
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksTable;
