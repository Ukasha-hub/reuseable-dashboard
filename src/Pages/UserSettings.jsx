import React, { useEffect, useState } from 'react';
import users from '../Data/Users';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import { GrDocumentCsv } from "react-icons/gr";

import { FaFilePdf } from "react-icons/fa6";
import { downloadCSV, downloadPDF } from '../Utils/DownloadUtils';






const UserSettings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const [searchTerm, setSearchTerm] = useState('');

  const [usersPerPage, setUsersPerPage] = useState(10);
  const [userList, setUserList] = useState(() => {
    const stored = localStorage.getItem('users');
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : users;
    }
    return users;
  });
  

  

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(userList));
  }, [userList]);
  console.log('Loaded users:', JSON.parse(localStorage.getItem('users')));

  const filteredUsers = userList.filter(user =>
    user.name.toLowerCase().includes(searchTerm) ||
    user.jobTitle.toLowerCase().includes(searchTerm) ||
    user.phone.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm) ||
    user.address.toLowerCase().includes(searchTerm)
  );
  

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  

  // Handle sorting logic
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key]?.toString().toLowerCase() || '';
    const valB = b[sortConfig.key]?.toString().toLowerCase() || '';

    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, startIndex + usersPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    }
    return '';
  };

  const generatePagination = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) pages.push(1, 2, 3, '...', totalPages);
      else if (currentPage >= totalPages - 2) pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      else pages.push(1, '...', currentPage, '...', totalPages);
    }

    return pages;
  };

  

  return (
    <div className="container  mx-auto p-4 dark:text-gray-800">
      <div><Breadcrumb location={location} pathnames={pathnames}></Breadcrumb></div>
      <div className='flex lg:flex-row flex-col mb-2  justify-between'>
        
            <div><h2 className="mb-4 text-2xl font-semibold leading-tight">Users</h2></div>
            
            
        <div className='flex flex-row  gap-1'>
            <div className="flex items-center  gap-2">
                      
                      <select
                        className="select-md border border-gray-300  "
                        value={usersPerPage}
                        onChange={(e) => {
                          setUsersPerPage(Number(e.target.value));
                          setCurrentPage(1); // reset to first page on change
                        }}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                      </select>
              </div> 
            
            <div className="join flex justify-center mt-1 lg:mt-3">
              {generatePagination().map((page, idx) => (
                <button
                  key={idx}
                  className={`join-item btn  btn-xs ${page === currentPage ? 'btn-active' : ''} ${page === '...' ? 'btn-disabled' : ''}`}
                  onClick={() => typeof page === 'number' && changePage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
        </div>

            
         
       

      </div>
       <div className='flex lg:flex-row flex-col gap-2 justify-between'>
                  
              <div className='flex gap-2'>
                        <div className="tooltip lg:z-50" data-tip="Download CSV"> <button className='btn btn-sm' onClick={() => downloadCSV(userList)}><GrDocumentCsv className='text-lg'/></button></div>
                         <div className="tooltip lg:z-50" data-tip="Download PDF"> <button className='btn btn-sm' onClick={() => downloadPDF(userList)}><FaFilePdf className='text-lg'/></button></div>
                       
                      <Link to="/usersSettings/add" ><div className="tooltip lg:z-50" data-tip="Add new User"><button className='btn btn-sm  bg-green-300 text-lg'>+</button></div></Link>
              </div>
                  
                  <label className="input input-sm text-base-content ">
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
                            <input
                              type="search"
                              className="grow"
                              placeholder="Search"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                            />
                
                </label>

                     
          
       </div>
     

      

      <div className=" w-full overflow-x-auto rounded-lg shadow-md mt-4">
        <table className="min-w-full table-auto text-sm text-left">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-300 border-b border-gray-300">
              <th className="p-3 cursor-pointer" onClick={() => requestSort('id')}>Id {getSortArrow('id')}</th>
              <th className="p-3"></th>
              <th className="p-3 cursor-pointer" onClick={() => requestSort('name')}>Name {getSortArrow('name')}</th>
              <th className="p-3 cursor-pointer" onClick={() => requestSort('jobTitle')}>Job title {getSortArrow('jobTitle')}</th>
              <th className="p-3 cursor-pointer" onClick={() => requestSort('phone')}>Phone {getSortArrow('phone')}</th>
              <th className="p-3 cursor-pointer" onClick={() => requestSort('email')}>Email {getSortArrow('email')}</th>
              <th className="p-3 cursor-pointer" onClick={() => requestSort('address')}>Address {getSortArrow('address')}</th>
              <th className="p-3"><span className="sr-only">Edit</span></th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={startIndex + index} className="border-b border-gray-200 dark:border-gray-300">
                <td className="px-3 py-2">{startIndex + index + 1}</td>
                <td className="px-3 py-2">
                  <img src={user.image} className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full object-cover" alt={user.name} />
                </td>
                <td className="px-3 py-2">{user.name}</td>
                <td className="px-3 py-2">{user.jobTitle}</td>
                <td className="px-3 py-2">{user.phone}</td>
                <td className="px-3 py-2">{user.email}</td>
                <td className="px-3 py-2">{user.address}</td>
                <td className="px-3 py-2">
                <div className="dropdown dropdown-end z-50">
                   <div className="tooltip z-50" data-tip="Action:Edit or Delete">

                      <button tabIndex={0} className="btn btn-sm rounded-full">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                        </button>

                   </div>
                    
                    <ul tabIndex={0} className="dropdown-content menu z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                      {console.log(user.id)}
                    <li><Link to={`/usersSettings/edit/${user.id}`}>
                      Edit
                    </Link></li>
                    <li><a>Delete</a></li>
                    </ul>
                </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
};

export default UserSettings;
