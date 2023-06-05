import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
	ErrorState,
	FilterContext,
	FilterState,
} from '../src/contexts/FilterContext';
import TypeFilter from '../src/components/ItemSearch/Filter/TypeFilter';
import '@testing-library/jest-dom';

describe('TypeFilter', () => {
	test('should update the checkboxOptions value on checkbox change', () => {
		const handleFilterChange = jest.fn();
		const filters: FilterState = {
			item_id: '',
			order_number: '',
			checkboxOptions: [],
		};
		const errors: ErrorState = {
			item_id: false,
			order_number: false,
		};

		const contextValue = {
			filters,
			errors,
			handleFilterChange,
			data: [],
			filt: [],
			query: '',
			updateFilters: jest.fn(),
			handleFilter: jest.fn(),
			setData: jest.fn(),
			setFilt: jest.fn(),
			setQuery: jest.fn(),
			handleReset: jest.fn(),
		};

		render(
			<FilterContext.Provider value={contextValue}>
				<TypeFilter />
			</FilterContext.Provider>
		);

		const checkbox = screen.getByLabelText('CAO');
		fireEvent.click(checkbox);

		expect(handleFilterChange).toHaveBeenCalledTimes(1);
		expect(handleFilterChange).toHaveBeenCalledWith(expect.any(Object));
	});
});
