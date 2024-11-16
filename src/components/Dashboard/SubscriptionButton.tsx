'use client';

import { Button } from '../ui/button';
import Link from 'next/link';

interface SubscriptionButtonProps {
  plan: string;
  isActive: boolean;
}

export const SubscriptionButton = ({
  plan,
}: SubscriptionButtonProps) => {

  return (
         <Link href="/payment">
            <Button
              size="lg"
              variant="default"
            >
              {plan === 'free' ? 'Upgrade' : 'Manage Subscription'}
            </Button>
          </Link>


  );
};