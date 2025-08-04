import AwardsSection from "../components/awards/AwardsSection";
import MainLayout from "../layout/Layout";
import StartUpLayout from "../layout/Startup";

export default function AwardsPage() {
  return (
    <div>
      <MainLayout>
        <StartUpLayout>
          <AwardsSection />
        </StartUpLayout>
      </MainLayout>
    </div>
  );
}
