
import Heading from '@/components/Dashboard/heading';
import { Settings } from 'lucide-react';


const SettingsPage = async () => {

  return (
    <div className="flex flex-col h-screen">
      <Heading
        title="Settings"
        description="Manage your account settings."
        icon={Settings}
        iconColor="text-gray-300"
        bgColor="bg-gray-700/10"
      />
    </div>
  );
};

export default SettingsPage;