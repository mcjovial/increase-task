import React, { useContext } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';

const TypeFilter = () => {
	const { filters, handleFilterChange }: any = useContext(FilterContext);

	const checkboxOptions = ['ALL', 'CAO', 'EDF', 'SFO'];

	return (
		<>
			<div>
				{checkboxOptions.map((option) => (
					<div
						key={option}
						className="flex items-center gap-x-2 py-3 border-b-2 border-[#EDF4FE]"
					>
						<input
							className="h-4 w-4"
							name="show-all"
							type="checkbox"
							value={option}
							checked={filters.checkboxOptions.includes(option)}
							onChange={handleFilterChange}
							id={option}
						/>
						<label className="text-sm" htmlFor={option}>
							{option}
						</label>
					</div>
				))}
			</div>
		</>
	);
};

export default TypeFilter;
