import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import ItemFilter from '../ItemSearch/Filter/ItemFilter';
import OrderFilter from '../ItemSearch/Filter/OrderFilter';
import TypeFilter from '../ItemSearch/Filter/TypeFilter';

const Accordion = () => {
	const accordionData = [
		{
			title: 'Item',
			component: <ItemFilter />,
		},
		{
			title: 'Order #',
			component: <OrderFilter />,
		},
		{
			title: 'Type',
			component: <TypeFilter />,
		},
	];

	const [open, setOpen] = useState<number[]>([]);

	const toggle = (index: number) => {
		if (!open.includes(index)) {
			const newOpen = [...open, index];
			setOpen(newOpen);
		} else {
			const updatedNumbers = open.filter((number) => number !== index);
			setOpen(updatedNumbers);
		}
	};

	return (
		<div className="bg-white w-full">
			<div className="flex justify-between w-full">
				<div className="w-full">
					{/* <div> */}
					{accordionData.map((data, index) => (
						<AccordionItem
							key={index}
							open={open.includes(index)}
							toggle={() => toggle(index)}
							title={data.title}
							component={data.component}
						/>
					))}
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
