import React from 'react';
import Accordion from '../Accordion/Accordion';

const EmptyTable = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <div className='text-center flex flex-col gap-y-3'>
          <div>
            <p className='text-3xl font-semibold'>What are you looking for?</p>
          </div>
          <div>
            <p className='text-[#778FAB]'>Get started by searching & filtering a few</p>
          </div>
          <div className='my-5'>
            <a className='bg-[#0C67A0] text-white px-12 py-3 rounded text-lg' href="">Fetch data</a>
          </div>
          <div>
            <p className='text-[#778FAB]'>or <span className='text-[#0C67A0]'>search for an item</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyTable;