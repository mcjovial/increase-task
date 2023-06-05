import React, { useContext } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';

const OrderFilter = () => {
	const { errors, filters, handleFilterChange }: any =
		useContext(FilterContext);

	return (
		<>
			<div>
				<textarea
					className={`${
						errors?.order_number ? 'outline-red-300' : 'outline-slate-300'
					} border-2 border-[#ECF3F8] rounded w-full px-3 py-2`}
					rows={4}
					placeholder={`Order ID (Ex. "${6733444444383}")`}
					name="order_number"
					value={filters.order_number}
					onChange={handleFilterChange}
				></textarea>
				{errors.order_number && (
					<div className="flex items-center gap-x-2 text-red-600">
						<img src="assets/error.svg" alt="error" />
						<p>Node needs to be at least four digits (Ex. &quot;1111&quot;)</p>
					</div>
				)}
			</div>
		</>
	);
};

export default OrderFilter;
