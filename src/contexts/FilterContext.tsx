import React, {
	createContext,
	useState,
	ReactNode,
	ChangeEvent,
	FormEvent,
	useEffect,
} from 'react';
import { IItem, tableData } from '../data/items';
import { search, tableFilter } from '../utils/helpers';

export interface FilterState {
	item_id: string;
	order_number: string;
	checkboxOptions: string[];
}

export interface ErrorState {
	item_id: boolean;
	order_number: boolean;
}

export interface FilterContextType {
	filters: FilterState;
	errors: ErrorState;
	data: IItem[];
	filt: IItem[];
	query: string;
	updateFilters: (newFilters: Partial<FilterState>) => void;
	handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleFilter: (e: FormEvent) => void;
	setData: (data: IItem[]) => void;
	setFilt: (data: IItem[]) => void;
	setQuery: (val: string) => void;
	handleReset: () => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
	undefined
);

interface FilterProviderProps {
	children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
	const initialErrorState = {
		item_id: false,
		order_number: false,
	};

	const [data, setData] = useState<IItem[]>([]);
	const [filt, setFilt] = useState<IItem[]>([]);
	const [query, setQuery] = useState<string>('');
	const [errors, setErrors] = useState<ErrorState>(initialErrorState);
	const [filters, setFilters] = useState<FilterState>({
		item_id: '',
		order_number: '',
		checkboxOptions: [],
	});

	const updateFilters = (newFilters: Partial<FilterState>) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			...newFilters,
		}));
	};

	const handleData = (name: string, value: string) => {
		const inputValue = value;
		const onlyNumbers = /^[0-9\b]+$/; // Regex pattern to match only numbers

		if (inputValue === '' || onlyNumbers.test(inputValue)) {
			// If the input value is empty or contains only numbers, update the state
			setErrors((prev) => ({
				...prev,
				[name]: false,
			}));
			// If the input length is less than 4
			if (inputValue.length < 4) {
				setErrors((prev) => ({
					...prev,
					[name]: true,
				}));
			}
			updateFilters({ [name]: value });
		} else {
			setErrors((prev) => ({
				...prev,
				[name]: true,
			}));
		}
	};

	useEffect(() => {
		if (!query) {
			setData([]);
		}
		setData(search(tableData, query));
	}, [query]);

	const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		if (type === 'checkbox') {
			const checkboxOptions = [...filters.checkboxOptions];
			if (checked) {
				checkboxOptions.push(value);
			} else {
				const index = checkboxOptions.indexOf(value);
				if (index > -1) {
					checkboxOptions.splice(index, 1);
				}
			}
			updateFilters({ checkboxOptions });
		} else {
			handleData(name, value);
		}
	};

	const handleFilter = (e: FormEvent) => {
		e.preventDefault();
		const { item_id, order_number, checkboxOptions } = filters;

		const filteredItems: IItem[] = tableFilter(
			tableData,
			item_id,
			order_number,
			checkboxOptions
		);

		setData(filteredItems);
		setFilt(filteredItems);
	};

	const handleReset = () => {
		setData([]);
		updateFilters({
			item_id: '',
			order_number: '',
			checkboxOptions: [],
		});
		setErrors(initialErrorState);
	};

	const contextValue: FilterContextType = {
		filters,
		data,
		filt,
		query,
		updateFilters,
		handleFilterChange,
		handleFilter,
		setData,
		setFilt,
		setQuery,
		errors,
		handleReset,
	};

	return (
		<FilterContext.Provider value={contextValue}>
			{children}
		</FilterContext.Provider>
	);
};
