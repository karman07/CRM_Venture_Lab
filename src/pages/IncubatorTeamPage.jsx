import React from 'react'
import MainLayout from '../layout/Layout'
import IncubatorMainLayout from '../layout/IncubatorMainLayout'
import TeamMembers from '../components/incubator_team/IncubatorTeamMembers'

export default function IncubatorTeamPage() {
  return (
    <MainLayout>
      <IncubatorMainLayout>
        <TeamMembers/>
      </IncubatorMainLayout>
    </MainLayout>
  )
}
