import React from "react";
import { useIncubation } from "../context/IncubationContext";
import IncubatorCard from "../components/apply/IncubatorCard";
import MainLayout from "../layout/Layout";
import IncubatorsSelection from "../layout/SelectionIncubatorLayout";

const ApplyForIncubation = () => {
  const { incubators } = useIncubation();

  return (
    <MainLayout>
      <IncubatorsSelection>
        <div className="space-y-6 p-6">
          <div className="space-y-4">
            {incubators.map((incubator) => (
              <IncubatorCard key={incubator.id} incubator={incubator} />
            ))}
          </div>
        </div>
      </IncubatorsSelection>
    </MainLayout>
  );
};

export default ApplyForIncubation;
