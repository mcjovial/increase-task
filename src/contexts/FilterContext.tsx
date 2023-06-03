import React, { createContext, useState, ReactNode, ChangeEvent, FormEvent, useEffect } from 'react';
import { IItem, tableData } from '../data/items';
import { search } from '../utils/helpers';

interface FilterState {
  item_id: string;
  order_number: string;
  checkboxOptions: string[];
}

interface FilterContextType {
  filters: FilterState;
  data: IItem[];
  filt: IItem[];
  query: string;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFilter: (e: FormEvent) => void;
  setData: (data: IItem[]) => void;
  setFilt: (data: IItem[]) => void;
  setQuery: (val: string) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  
  const [data, setData] = useState<IItem[]>([]);
  const [filt, setFilt] = useState<IItem[]>([]);
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<FilterState>({
    item_id: '',
    order_number: '',
    checkboxOptions: [],
  });

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters,
    }));
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
      updateFilters({ [name]: value });
    }
  };

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    const { item_id, order_number, checkboxOptions } = filters;

    const filteredItems: IItem[] = tableData.filter((item) => {
      if (!item_id && !order_number && checkboxOptions.length == 0) {
        return;
      }
      const orderNumberMatch =
        order_number === '' || item.order_number.toString().includes(order_number);
      const typeMatch =
        checkboxOptions.length === 0 || checkboxOptions.includes('ALL') || checkboxOptions.includes(item.type);
      const itemIdMatch =
        item_id === '' || item.item_id.toString().includes(item_id);
  
      return orderNumberMatch && typeMatch && itemIdMatch;
    });

    setData(filteredItems);
    setFilt(filteredItems);
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
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
