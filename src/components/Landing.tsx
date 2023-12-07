
import React from 'react';
import NavButton from './NavButton';

const Landing = () => {
  return (
    <div className='flex h-screen flex-col justify-center items-center gap-4'>
      <NavButton link={'/own-notes'}>Create Own Notes</NavButton>
      {/* <NavButton link={'/suggested-notes'}>Use Suggested Notes</NavButton> */}
    </div>
  );
};

export default Landing;
