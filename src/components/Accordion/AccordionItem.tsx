import React, { FC } from 'react';
import { Collapse } from 'react-collapse';

interface IAccordion {
  open: any;
  toggle: (arg0: any) => void;
  title: string;
  component: any;
}

const AccordionItem: FC<IAccordion> = ({
  open,
  toggle,
  title,
  component,
}) => {

  return (
    <div className='border-b-2 w-full'>
      <div
        className='py-4 px-8 flex justify-between items-center cursor-pointer text-[#5d5a5a] w-full'
        onClick={toggle}
      >
        <div className='flex items-center'>
          <p className='text-[#10243C]'>{title}</p>
        </div>
        <div className='text-lg'>
          <img className={`${open && 'rotate-180' }`} src="assets/arrow-down.svg" alt="arrow-down" />
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='bg-white px-8 py-4 pt-0 text-[#5d5a5a]'>
          {component}
        </div>
      </Collapse>
    </div>
  );
};
// 3337260010
export default AccordionItem;
