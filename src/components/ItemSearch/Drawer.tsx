import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export default function Drawer({
	children,
	isOpen,
	setIsOpen,
}: {
	children: any;
	isOpen: any;
	setIsOpen: any;
}) {
	const { handleFilter, setData, updateFilters }: any =
		useContext(FilterContext);

	return (
		<main
			className={
				' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
				(isOpen
					? ' transition-opacity opacity-100 duration-500 translate-x-0  '
					: ' transition-all delay-500 opacity-0 translate-x-full  ')
			}
		>
			<section
				className={
					' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full')
				}
			>
				<article className="relative w-screen max-w-lg flex flex-col space-y-6 justify-between overflow-y-scroll h-full">
					<div>
						<div className="py-5 px-8 flex justify-between items-center bg-[#F5F7F8]">
							<div className="flex gap-x-4 items-center">
								<img
									className="h-5 w-5"
									src="assets/open-filter.svg"
									alt="open-filter"
								/>
								<div>
									<p className="text-2xl">Set Parameters</p>
									<p className="text-xs text-[#778FAB]">
										9 parameters available
									</p>
								</div>
							</div>
							<div>
								<button
									onClick={() => (
										setData([]),
										updateFilters({
											item_id: '',
											order_number: '',
											checkboxOptions: [],
										})
									)}
									className="text-sm text-[#0C67A0] font-semibold"
								>
									Reset all
								</button>
							</div>
						</div>
						{children}
					</div>
					<div className="flex bg-[#E7EDF6] py-6 px-8 justify-between items-center">
						<button
							className="py-3 px-16 rounded text-[#0C67A0] hover:bg-[#D9E0E7]"
							onClick={() => setIsOpen(false)}
						>
							Cancel
						</button>
						<button
							className="py-3 px-16 rounded bg-[#0C67A0] text-white hover:bg-[#D9E0E7] hover:text-[#0C67A0]"
							onClick={handleFilter}
						>
							Apply
						</button>
					</div>
				</article>
			</section>
			<section
				className=" w-screen h-full cursor-pointer "
				onClick={() => {
					setIsOpen(false);
				}}
			></section>
		</main>
	);
}
