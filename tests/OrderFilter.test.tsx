import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterContext, FilterState } from '../src/contexts/FilterContext';
import OrderFilter from '../src/components/ItemSearch/Filter/OrderFilter';
import '@testing-library/jest-dom';

describe('OrderFilter', () => {
	test('should update the filter value on input change', () => {
		const handleFilterChange = jest.fn();
		const filters: FilterState = {
			item_id: '',
			order_number: '',
			checkboxOptions: [],
		};

		const contextValue = {
			filters,
			handleFilterChange,
			data: [],
			filt: [],
			query: '',
			updateFilters: jest.fn(),
			handleFilter: jest.fn(),
			setData: jest.fn(),
			setFilt: jest.fn(),
			setQuery: jest.fn(),
		};

		render(
			<FilterContext.Provider value={contextValue}>
				<OrderFilter />
			</FilterContext.Provider>
		);

		const textarea = screen.getByPlaceholderText(
			'Order ID (Ex. "6733444444383")'
		);
		fireEvent.change(textarea, { target: { value: '1234' } });

		expect(handleFilterChange).toHaveBeenCalledTimes(1);
		expect(handleFilterChange).toHaveBeenCalledWith(expect.any(Object));
	});

	test('should display an error message for invalid input', () => {
		const handleFilterChange = jest.fn();
		const filters: FilterState = {
			item_id: '',
			order_number: '',
			checkboxOptions: [],
		};

		const contextValue = {
			filters,
			handleFilterChange,
			data: [],
			filt: [],
			query: '',
			updateFilters: jest.fn(),
			handleFilter: jest.fn(),
			setData: jest.fn(),
			setFilt: jest.fn(),
			setQuery: jest.fn(),
		};
		render(
			<FilterContext.Provider value={contextValue}>
				<OrderFilter />
			</FilterContext.Provider>
		);

		const textarea = screen.getByPlaceholderText(
			'Order ID (Ex. "6733444444383")'
		);
		fireEvent.change(textarea, { target: { value: 'abcd' } });

		const errorText = screen.getByText(
			'Node needs to be four digits (Ex. "1111")'
		);
		expect(errorText).toBeInTheDocument();
	});
});
