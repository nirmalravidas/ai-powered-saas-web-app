
import Navbar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/Sidebar';
import { getApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';


const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimit();
  const {isActive, plan} = await checkSubscription();

  return (
    <div className="h-full bg-[#1e2738]">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <Sidebar apiLimitCount={apiLimitCount} plan={plan} isActive={isActive} />
      </div>
      <main className="md:pl-72">

          <Navbar />
          {children}
      </main>
    </div>
  );
};

export default DashboardLayout;