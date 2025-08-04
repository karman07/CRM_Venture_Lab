import MainLayout from '../layout/Layout';
import IPTable from '../components/IP/IPTable';
import StartUpLayout from '../layout/Startup';
export default function IPpage() {
  return (
    <MainLayout>
      <StartUpLayout>
        <IPTable />
      </StartUpLayout>
    </MainLayout>
  );
}
