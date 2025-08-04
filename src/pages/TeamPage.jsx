import React from 'react'
import MainLayout from '../layout/Layout'
import StartUpLayout from '../layout/Startup'
import TeamList from '../components/team/TeamList'

export default function TeamPage() {
  return (
    <MainLayout>
      <StartUpLayout>
        <TeamList />
      </StartUpLayout>
    </MainLayout>
  )
}
