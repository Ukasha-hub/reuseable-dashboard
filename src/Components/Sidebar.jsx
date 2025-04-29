import React from 'react';
import Topbar from './Topbar';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import UserProfile from '../Pages/UserProfile';
import UserSettings from '../Pages/UserSettings';
import AddUserForm from '../Pages/AddUserForm';


const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
         {/* Page content */}
        <Topbar />

        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/settings/users" element={<UserSettings />} />
        <Route path="/settings/users/form" element={<AddUserForm />} />
        <Route path="/settings/users/form/:id" element={<AddUserForm />} />
        </Routes>
       
        
      </div>
      
      <div className="drawer-side  border border-base-300 ">
        {/* Remove overlay on large screens */}
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay lg:hidden"></label>
        
        <ul className="menu  lg:bg-base-100 bg-white z-50 text-black lg:text-base-content  min-h-full w-70 p-4">
          {/* Sidebar content here */}

          <li className='pb-5 w-60'>
            <label className="input lg:text-base-content text-white">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
                </label>
            </li>
            <li><Link to="/">Home</Link></li>
          

          {/* Settings Dropdown */}
          <li>
            <details>
              <summary>Settings</summary>
              <ul className="pl-4">
                <li><Link to="/settings/users" >User Settings</Link></li>
              </ul>
            </details>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;