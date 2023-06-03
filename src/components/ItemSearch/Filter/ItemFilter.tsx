import React, { useContext, useState } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';

const ItemFilter = () => {
  const { filters, handleFilterChange }: any = useContext(FilterContext);

  const [error, setError] = useState(false);

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    const onlyNumbers = /^[0-9\b]+$/; // Regex pattern to match only numbers

    if (inputValue === '' || onlyNumbers.test(inputValue)) {
      // If the input value is empty or contains only numbers, update the state
      setError(false);
      handleFilterChange(event);
    } else {
      console.log('hey');
      setError(true);
    }
  };

  return (
    <>
      <div>
        <textarea
          className={`${error ? 'outline-red-300' : 'outline-slate-300'} border-2 border-[#ECF3F8] rounded w-full px-3 py-2`}
          name="item_id"
          rows={4}
          placeholder={`Item ID (Ex. "${67344383}")`}
          value={filters.item_id}
          onChange={handleInputChange}
        ></textarea>
        {error && 
          <div className='flex items-center gap-x-2 text-red-600'>
            <img src="assets/error.svg" alt="error" />
            <p>Node needs to be four digits (Ex. &quot;1111&quot;)</p>
          </div>
        }
      </div>
    </>
  );
};

export default ItemFilter;