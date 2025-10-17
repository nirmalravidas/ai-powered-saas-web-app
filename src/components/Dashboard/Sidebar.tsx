'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard,
  Settings,
  BookOpen,
} from 'lucide-react';

import { APP_NAME, cn } from '@/utils';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Courses',
    icon: BookOpen,
    href: '/courses',
    color: 'text-emerald-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className='px-2'>
            <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            {APP_NAME}
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
