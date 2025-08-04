import React from 'react'
import MainLayout from '../layout/Layout'
import StartUpLayout from '../layout/Startup'
import UpdatesList from '../components/updates/UpdatesList'

export default function UpdatesPage() {
  return (
   <MainLayout>
      <StartUpLayout>
        <UpdatesList/>
      </StartUpLayout>
    </MainLayout>
  )
}
