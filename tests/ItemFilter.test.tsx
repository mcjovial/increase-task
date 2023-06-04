import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterContext, FilterState } from '../src/contexts/FilterContext';
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
				<ItemFilter />
			</FilterContext.Provider>
		);

		const inputElement = screen.getByPlaceholderText(
			'Item ID (Ex. "67344383")'
		);
		fireEvent.change(inputElement, { target: { value: 'abcd' } });

		const errorMessage = screen.getByText(
			'Node needs to be four digits (Ex. "1111")'
		);
		expect(errorMessage).toBeInTheDocument();
	});

	test('should not display an error message for valid input', () => {
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
				<ItemFilter />
			</FilterContext.Provider>
		);

		const inputElement = screen.getByPlaceholderText(
			'Item ID (Ex. "67344383")'
		);
		fireEvent.change(inputElement, { target: { value: '5678' } });

		const errorMessage = screen.queryByText(
			'Node needs to be four digits (Ex. "1111")'
		);
		expect(errorMessage).toBeNull();
	});
});
