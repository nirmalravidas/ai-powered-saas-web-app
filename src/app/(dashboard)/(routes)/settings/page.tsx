
import Heading from '@/components/Dashboard/heading';
import { SubscriptionButton } from '@/components/Dashboard/SubscriptionButton';
import { checkSubscription } from '@/lib/subscription';
import { Settings } from 'lucide-react';


const SettingsPage = async () => {
  const { isActive, plan } = await checkSubscription();
  
  const getPlanText = () => {
      if (plan === 'free') {
        return "You are currently on a Free plan."
      } else if (plan === 'premier') {
        return "You are currently on a Premier plan."
      } else {
        return "You are currently on a Pro plan."
      }
    }

  return (
    <div className="flex flex-col h-screen">
      <Heading
        title="Settings"
        description="Manage your account settings."
        icon={Settings}
        iconColor="text-gray-300"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-slate-300 text-lg font-medium mb-4">
          {getPlanText()}
        </div>
        <SubscriptionButton plan={plan} isActive={isActive}/>
      </div>
    </div>
  );
};

export default SettingsPage;