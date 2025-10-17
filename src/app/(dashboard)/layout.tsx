
import Navbar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/Sidebar';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="h-full bg-[#1e2738]">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <Sidebar/>
      </div>
      <main className="md:pl-72">
          <Navbar />
          {children}
      </main>
    </div>
  );
};

export default DashboardLayout;