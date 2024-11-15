'use client';

import { Zap } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface SubscriptionButtonProps {
  plan: string;
  isActive: boolean;
}

export const SubscriptionButton = ({
  isActive,
}: SubscriptionButtonProps) => {

  return (
         <Link href="/payment">
            <Button
              size="lg"
              variant="premium"
            >
              {!isActive ? 'Upgrade' : 'Manage Subscription'}
                 {!isActive && <Zap className="w-4 h-4 ml-2 fill-white" />}
            </Button>
          </Link>


  );
};