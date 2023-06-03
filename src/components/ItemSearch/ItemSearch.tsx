import React, { useContext, useState } from 'react';
import EmptyTable from './EmptyTable';
import Drawer from './Drawer';
import SearchTable from './Table/SearchTable';
import Accordion from '../Accordion/Accordion';
import { FilterContext } from '../../contexts/FilterContext';

const ItemSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery, data, filt }: any = useContext(FilterContext);

  const pageTitle = 'Item search';
    
	return (
		<>
			<div className="h-full flex flex-col">
				<div className="">
					<div className="flex gap-x-3 py-3 px-10 bg-[#E0E9F7]">
						<span>Home</span>
						<img src="assets/right-arrow.svg" alt="right-arrow" />
						<span>OC</span>
						<img src="assets/right-arrow.svg" alt="right-arrow" />
						<span className="text-slate-400">{pageTitle}</span>
					</div>
					<div className="px-10 py-5 border-b-[3px] border-[#E0E9F7] w-full flex justify-between items-center">
						<div className="">
							<h2 className="text-4xl font-semibold">{pageTitle}</h2>
							<p className="text-slate-400">0 items</p>
						</div>
						<div className="flex items-center gap-x-5">
							<div className="relative">
								<input
									className="w-[300px] pl-5 pr-9 py-2.5 border-2 border-solid border-slate-300 rounded focus:outline-none focus:border-[#2B80B0] placeholder:text-grey placeholder:text text-slate-600"
									type="search"
									name="search"
                  placeholder="Search by item #, Order #"
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}
								/>
								<div className="absolute top-0 -right-1 py-2.5 px-4">
									<img
										className="h-7 w-auto"
										src="assets/search.svg"
										alt="search"
									/>
								</div>
							</div>
							<div className="border-2 border-slate-300 rounded p-3 cursor-pointer">
								<img className="w-5" src="assets/plus.svg" alt="add" />
							</div>
							<div className="cursor-pointer">
								<img className="w-8" src="assets/bookmark.svg" alt="bookmark" />
							</div>
							<div className="cursor-pointer">
								<img
									className="w-8"
									src="assets/filter.svg"
									alt="filter"
									onClick={() => setIsOpen(true)}
								/>
							</div>
						</div>
					</div>
				</div>

        <div className="h-full">
          {(data.length !== 0 && query) || (data.length !== 0 && filt.length !== 0) ? <SearchTable data={data} /> : <EmptyTable/>}
        </div>
			</div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Accordion/>
			</Drawer>
		</>
	);
};

export default ItemSearch;
