import { UserButton } from '@clerk/nextjs';

import MobileSidebar from './MobileSidebar';
import Link from 'next/link';
import { APP_NAME } from '@/utils';
import Image from 'next/image';

const Navbar = async () => {

  return (
    <div className="flex item-center p-4">
      <MobileSidebar/>
      <div className='w-full p-2 lg:hidden md:flex flex justify-center items-center text-white font-bold'>
          <Link href="/" className="flex items-center gap-x-1">
              <Image src='/icons/logo.png' alt="logo" width={18} height={18} />
              <h1 className="text-lg font-medium">
                  {APP_NAME}
              </h1>
          </Link>
      </div>
      <div className="flex lg:w-full md:w-auto justify-end">
        <UserButton
          afterSwitchSessionUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;