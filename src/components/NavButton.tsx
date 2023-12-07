import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonProps {
  link: string;
  children: ReactNode;
}

const NavButton: React.FC<ButtonProps> = ({ link, children }) => {
  return (
    <Link
      className='text-center text-lg font-bold w-72 bg-white text-gray-600 p-2 px-3 border border-s-violet-300 rounded-xl shadow-lg hover:text-red-500 hover:text-xl '
      href={link}
    >
      {children}
    </Link>
  );
};

export default NavButton;
