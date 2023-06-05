import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
	ErrorState,
	FilterContext,
	FilterProvider,
	FilterState,
} from '../src/contexts/FilterContext';
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
		const { getByPlaceholderText, getByText } = render(
			<FilterProvider>
				<OrderFilter />
			</FilterProvider>
		);

		const textarea = getByPlaceholderText('Order ID (Ex. "6733444444383")');
		fireEvent.change(textarea, { target: { value: 'abcd' } });

		const errorText = getByText(
			'Node needs to be at least four digits (Ex. "1111")'
		);
		expect(errorText).toBeInTheDocument();
	});
});
