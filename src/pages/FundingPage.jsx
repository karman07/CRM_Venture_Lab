import React from 'react';
import MainLayout from '../layout/Layout';
import FundingTabs from '../components/Funding/FundingTabs';
import StartUpLayout from '../layout/Startup';

const FundingPage = () => {
  return (
    <MainLayout>
        <StartUpLayout>
           <FundingTabs />
        </StartUpLayout>
    </MainLayout>
  );
};

export default FundingPage;
