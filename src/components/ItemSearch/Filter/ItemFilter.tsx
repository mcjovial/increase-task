import React, { useContext } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';

const ItemFilter = () => {
	const { errors, filters, handleFilterChange }: any =
		useContext(FilterContext);

	return (
		<>
			<div>
				<textarea
					className={`${
						errors.item_id ? 'outline-red-300' : 'outline-slate-300'
					} border-2 border-[#ECF3F8] rounded w-full px-3 py-2`}
					name="item_id"
					rows={4}
					placeholder={`Item ID (Ex. "${67344383}")`}
					value={filters.item_id}
					onChange={handleFilterChange}
				></textarea>
				{errors.item_id && (
					<div className="flex items-center gap-x-2 text-red-600">
						<img src="assets/error.svg" alt="error" />
						<p>Node needs to be at least four digits (Ex. &quot;1111&quot;)</p>
					</div>
				)}
			</div>
		</>
	);
};

export default ItemFilter;
