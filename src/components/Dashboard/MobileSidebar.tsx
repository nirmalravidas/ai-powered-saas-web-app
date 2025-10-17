'use client';

import { Menu } from 'lucide-react';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Button } from '../ui/button';

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTitle>
        <VisuallyHidden.Root>
          Menu
        </VisuallyHidden.Root>
      </SheetTitle>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu/>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="p-0">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;