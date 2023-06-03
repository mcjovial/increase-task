import React, { FC } from 'react';
import { IItem } from '../../../data/items';

interface ITable {
  data: IItem[];
}

const SearchTable: FC<ITable> = ({data: tableData}) => {

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr className='text-slate-600 font-semibold border-b-2 border-[#E0E9F7]'>
            <td className='px-4 py-2 border-x-2 w-16'>
              <div className='flex items-center gap-x-1'>
                <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded' type='checkbox' />
                <img className='h-2' src="assets/drop-arrow.svg" alt="sort" />
              </div>
            </td>
            <td className='px-4 py-2 border-x-2 w-36'>
              <div className='flex justify-between items-center'>
                <div>
                  <p>Order #</p>
                  <p className='text-xs'>Showing All</p>
                </div>
                <div>
                  <img src="assets/sort.svg" alt="sort" />
                </div>
              </div>
            </td>
            <td className='px-4 py-2 border-x-2 w-28'>
              <div className='flex justify-between items-center'>
                <div>
                  <p>Type #</p>
                  <p className='text-xs'>Show All</p>
                </div>
                <div>
                  <img src="assets/sort.svg" alt="sort" />
                </div>
              </div>
            </td>
            <td className='px-4 py-2 border-x-2 w-32'>
              <div className='flex justify-between items-center'>
                <div>
                  <p>Item #</p>
                  <p className='text-xs'>Show All</p>
                </div>
                <div>
                  <img src="assets/sort.svg" alt="sort" />
                </div>
              </div>
            </td>
            <td className='px-4 py-2 border-x-2 w-'>
              <div className='flex justify-between items-center'>
                <div>
                  <p>Category #</p>
                  <p className='text-xs'>Show All</p>
                </div>
                <div>
                  <img src="assets/sort.svg" alt="sort" />
                </div>
              </div>
            </td>
            <td className='px-4 py-2 border-x-2'>
              <div className='flex justify-between items-center'>
                <div>
                  <p>Description #</p>
                  <p className='text-xs'>Show All</p>
                </div>
                <div>
                  <img src="assets/sort.svg" alt="sort" />
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={i} className='text-slate-600 text-sm border-b-2 border-[#E0E9F7]'>
              <td className='px-4 py-2 border-x-2 w-16 text-center'>{i + 1}</td>
              <td className='px-4 py-2 border-x-2 text-center text-[#005ECD] underline underline-offset-2'><a href="">{data.order_number}</a></td>
              <td className='px-4 py-2 border-x-2'>{data.type}</td>
              <td className='px-4 py-2 border-x-2 text-center'>{data.item_id}</td>
              <td className='px-4 py-2 border-x-2'>{data.category}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchTable;