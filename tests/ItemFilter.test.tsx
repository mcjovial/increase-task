import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
	ErrorState,
	FilterContext,
	FilterProvider,
	FilterState,
} from '../src/contexts/FilterContext';
import ItemFilter from '../src/components/ItemSearch/Filter/ItemFilter';
import '@testing-library/jest-dom';

describe('ItemFilter', () => {
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
				<ItemFilter />
			</FilterContext.Provider>
		);

		const inputElement = screen.getByPlaceholderText(
			'Item ID (Ex. "67344383")'
		);
		fireEvent.change(inputElement, { target: { value: '1234' } });

		expect(handleFilterChange).toHaveBeenCalledWith(expect.any(Object));
	});

	test('should display an error message for invalid input', () => {
		const { getByPlaceholderText, getByText } = render(
			<FilterProvider>
				<ItemFilter />
			</FilterProvider>
		);

		const inputElement = getByPlaceholderText('Item ID (Ex. "67344383")');
		fireEvent.change(inputElement, { target: { value: 'abcd' } });

		const errorMessage = getByText(
			'Node needs to be at least four digits (Ex. "1111")'
		);

		expect(errorMessage).toBeInTheDocument();
	});

	test('should not display an error message for valid input', () => {
		const { getByPlaceholderText, queryByText } = render(
			<FilterProvider>
				<ItemFilter />
			</FilterProvider>
		);

		const inputElement = getByPlaceholderText('Item ID (Ex. "67344383")');
		fireEvent.change(inputElement, { target: { value: '5678' } });

		const errorMessage = queryByText(
			'Node needs to be at least four digits (Ex. 1111")'
		);
		expect(errorMessage).toBeNull();
	});
});
