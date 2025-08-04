import React from 'react'
import MainLayout from '../layout/Layout';
import StartupProfile from '../components/Startup/StartupProfile';
import StartUpLayout from '../layout/Startup';
export default function StartUpPage() {
  return (
    <MainLayout>
      <StartUpLayout>
        <StartupProfile />
      </StartUpLayout>
    </MainLayout>
  )
}
