import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  action: () => void; // Specify the type of action as a function that doesn't return anything
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ action, children }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    action(); // Invoke the action function passed as a prop
  };

  return (
    <button
      className='text-center w-full text-lg font-bold bg-white text-gray-600 p-2 px-3 border border-s-violet-300 rounded-xl shadow-lg hover:text-red-500 hover:text-xl'
      onClick={handleClick} // Use the local handleClick function in onClick
    >
      {children}
    </button>
  );
};

export default Button;
