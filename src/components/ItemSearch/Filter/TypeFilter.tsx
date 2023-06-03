import React, { useContext } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';

const TypeFilter = () => {
  const { filters, handleFilterChange }: any = useContext(FilterContext);

  return (
    <>
      <div>
        <div className='flex items-center gap-x-2 py-3 border-b-2 border-[#EDF4FE]'>
          <input className='h-4 w-4'
            name='show-all'
            type="checkbox"
            value="ALL"
            checked={filters.checkboxOptions.includes('ALL')}
            onChange={handleFilterChange}
          />
          <label className='text-sm' htmlFor="">Show all</label>
        </div>
        <div className='flex items-center gap-x-2 py-3 border-b-2 border-[#EDF4FE]'>
          <input
            className='h-4 w-4'
            name='show-all'
            type="checkbox"
            value="CAO"
            checked={filters.checkboxOptions.includes('CAO')}
            onChange={handleFilterChange}
          />
          <label className='text-sm' htmlFor="">CAO</label>
        </div>
        <div className='flex items-center gap-x-2 py-3 border-b-2 border-[#EDF4FE]'>
          <input
            className='h-4 w-4'
            name='show-all'
            type="checkbox"
            value="EDF"
            checked={filters.checkboxOptions.includes('EDF')}
            onChange={handleFilterChange}
          />
          <label className='text-sm' htmlFor="">EDF</label>
        </div>
        <div className='flex items-center gap-x-2 py-3 border-b-2 border-[#EDF4FE]'>
          <input
            className='h-4 w-4'
            name='show-all'
            type="checkbox"
            value="SFO"
            checked={filters.checkboxOptions.includes('SFO')}
            onChange={handleFilterChange}
          />
          <label className='text-sm' htmlFor="">SFO</label>
        </div>
      </div>
    </>
  );
};

export default TypeFilter;