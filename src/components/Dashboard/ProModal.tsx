'use client';

import {
  Check,
  SquareDot,
  Zap,
} from 'lucide-react';

import { APP_NAME, cn } from '@/utils';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useProModal } from '@/app/hooks/use-pro-modal';
import Link from 'next/link';


const tools = [
  {
    label: 'Free Plan: Only 4 images',
    icon: SquareDot,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Pro plan: Up to 50 images.',
    icon: SquareDot,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Premier Plan: Up to 150 images',
    icon: SquareDot,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
  },
 
];

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className='flex flex-col items-center justify-center'>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to {APP_NAME} Pro
              <Badge className="uppercase text-sm py-1" variant="premium">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <div className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                    <tool.icon className={cn('w-6 h-6', tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="w-5 h-5 text-green-500" />
              </Card>
            ))}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Link href="/payment">
            <Button
              size="lg"
              variant="premium"
              className="w-full"
            >
              Upgrade
              <Zap className="w-5 h-5 ml-2 fill-white" />
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};