import Layout from "../layout/Layout";
import { usemyIncubators } from "../context/MyIncubatorContext";
import SelectionIncubatorLayout from "../layout/SelectionIncubatorLayout";
const IncubatorsPage = () => {
  const incubators = usemyIncubators();

  return (
    <Layout>
        <SelectionIncubatorLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {incubators.map((incubator, index) => (
          <div
              key={index}
              className="flex items-center space-x-4 rounded-lg border bg-white p-4 shadow transition hover:shadow-lg"
            >
              <img
                src={incubator.logoUrl}
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{incubator.name}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Joining Date: {incubator.joiningDate}
                </p>
              </div>
            </div>
          ))}
        </div>
     </SelectionIncubatorLayout>
    </Layout>
  );
};

export default IncubatorsPage;
