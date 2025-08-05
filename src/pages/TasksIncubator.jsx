import React from 'react'
import MainLayout from '../layout/Layout'
import IncubatorMainLayout from '../layout/IncubatorMainLayout'
import TasksTable from '../components/tasks_incubator/TasksTable'

export default function TasksIncubator() {
  return (
    <MainLayout>
      <IncubatorMainLayout>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Tasks</h1>
        <TasksTable/>
      </IncubatorMainLayout>
    </MainLayout>
  )
}
