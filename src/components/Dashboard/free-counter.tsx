'use client';

import { useEffect, useState } from 'react';
import { MAX_FREE_COUNTS, MAX_PRO_COUNTS, MAX_PREMIER_COUNTS } from '../../../constants';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Zap } from 'lucide-react';
import { useProModal } from '@/app/hooks/use-pro-modal';
import Link from 'next/link';

interface FreeCounterProps {
  apiLimitCount: number;
  plan: string;
  isActive: boolean;
}

export const FreeCounter = ({
  apiLimitCount = 0,
  plan = 'free',
  isActive = false,
}: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine max limit based on plan
  let maxLimit = 0;
  let maxLabel = '';

  if (plan === 'pro') {
    maxLimit = MAX_PRO_COUNTS;
    maxLabel = 'Pro Plan';
  } else if (plan === 'premier') {
    maxLimit = MAX_PREMIER_COUNTS;
    maxLabel = 'Premier Plan';
  } else {
    maxLimit = MAX_FREE_COUNTS;
    maxLabel = 'Free Plan';
  }

  // Check if the user is out of generations and display upgrade button
  const isLimitReached = apiLimitCount >= maxLimit;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4">
            <p>
              {apiLimitCount} / {maxLimit} Image Generations ({maxLabel})
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / maxLimit) * 100}
            />
          </div>
          {isLimitReached || isActive ? (
            <Button 
              onClick={proModal.onOpen}
              className="w-full"
              variant="premium"
            >
              {isActive ? 'Upgrade Plan' : 'Renew Subscription'}
              <Zap className="w-4 h-4 ml-2 fil-white" />
            </Button>
          ) : (
            <Link href="/image">
              <Button 
                onClick={()=> console.log("Generate Image")}
                className="w-full"
                variant="default"
              >
                Generate Image
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
