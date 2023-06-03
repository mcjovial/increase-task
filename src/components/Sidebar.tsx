import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: 'Item search', src: 'chart-fill' },
    { title: 'Item', src: 'chart-fill', gap: true },
    { title: 'Item', src: 'chart-fill' },
    { title: 'Item', src: 'chart-fill' },
    { title: 'Item', src: 'chart-fill', gap: true },
  ];
  

  return (
    <>
      <div className={` ${open ? 'w-60' : ' w-20'} duration-300 h-screen bg-[#00152F] relative py-5  flex flex-col justify-between`}>
        <div>
          {/* <img
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-[#00152F] ${ !open && 'rotate-180'}`}
            src="assets/double-arrow-left.svg"
            alt="arrow"
            onClick={()=> setOpen(!open)}
          /> */}
          <div className='flex gap-x-4 px-5'>
            <p className={`text-white text-2xl cursor-pointer duration-500 bg-[#157CB0] w-12 flex justify-center items-center px-2 py-2 ${open && 'rotate-[360deg]'}`}>OC</p>
            <p className={`text-blue-200 text-sm flex items-end duration-300 ${!open && 'scale-0'}`}>Order Central</p>
          </div>
          <ul className='pt-6'>
            {menus.map((menu, i) => (
              <li key={i} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer py-4 px-5 hover:bg-[#064A71] ${i === 0 && 'bg-[#064A71] border-l-[5px] border-[#157CB0]'} border-l-[5px] hover:border-[#157CB0] border-[#00152F]`}>
                <img src={`assets/${menu.src}.svg`} alt={menu.title} />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-gray-300'>
          <div
            className='text-sm flex items-center gap-x-4 cursor-pointer py-4 px-5 hover:bg-[#064A71] border-l-[5px] hover:border-[#157CB0] border-[#00152F]'
            onClick={() => setOpen(!open)}
          >
            <img className={`${!open && 'rotate-180'}`} src="assets/double-arrow-left.svg" alt="" />
            <h3 className={`${!open && 'hidden'} origin-left duration-200`}>Close menu</h3>
          </div>
          <div className='text-sm flex items-center gap-x-4 cursor-pointer py-4 px-5 hover:bg-[#064A71] border-l-[5px] hover:border-[#157CB0] border-[#00152F]'>
            <img src="assets/dp.svg" alt="" />
            <div className={`${!open && 'hidden'} flex flex-col origin-left duration-200`}>
              <h3>Mazie Johnson</h3>
              <p className='text-xs'>View profile</p>
            </div>
          </div>
          <div className='text-sm flex items-center gap-x-4 cursor-pointer py-4 px-5 hover:bg-[#064A71] border-l-[5px] hover:border-[#157CB0] border-[#00152F]'>
            <img src="assets/help.svg" alt="" />
            <h3 className={`${!open && 'hidden'} origin-left duration-200`}>Help</h3>
          </div>
          <div className='text-sm flex items-center gap-x-4 cursor-pointer py-4 px-5 hover:bg-[#064A71] border-l-[5px] hover:border-[#157CB0] border-[#00152F]'>
            <img src="assets/bell.svg" alt="" />
            <h3 className={`${!open && 'hidden'} origin-left duration-200`}>Notification</h3>
          </div>
          <div className='text-sm flex items-center gap-x-4 cursor-pointer py-4 px-5 hover:bg-[#064A71] border-l-[5px] hover:border-[#157CB0] border-[#00152F]'>
            <img src="assets/logout.svg" alt="" />
            <h3 className={`${!open && 'hidden'} origin-left duration-200`}>Sign out</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;