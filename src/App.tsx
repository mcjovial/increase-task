import React from 'react';
import './app.css';
import Sidebar from './components/Sidebar';
import ItemSearch from './components/ItemSearch/ItemSearch';
import { FilterProvider } from './contexts/FilterContext';

const App = () => {
	return (
		<>
      <FilterProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 h-screen">
            <ItemSearch />
          </div>
        </div>
      </FilterProvider>
		</>
	);
};

export default App;
