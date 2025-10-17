import { APP_NAME } from '@/utils';
import Link from 'next/link';

const Footer = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  return (
    <footer className=" rounded-lg shadow m-4 bg-transparent">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-slate-400 sm:text-center">
          © {new Date().getFullYear()} {' '}
          <Link href="/" className="hover:underline">
            {APP_NAME}
          </Link>. 
          All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-400 sm:mt-0">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`hover:underline ${index < links.length - 1 ? 'me-4 md:me-6' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
