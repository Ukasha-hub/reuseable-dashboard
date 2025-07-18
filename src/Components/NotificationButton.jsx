import React from 'react'

import { IoNotifications } from "react-icons/io5";

const NotificationButton = () => {
  return (
    <div>
         <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn lg:btn-md btn-xs btn-ghost btn-circle avatar">
                    <button className="w-10 rounded-full flex justify-center">
                         <IoNotifications />
                    </button>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        
                    </a>
                    </li>
                    <li ><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>

    </div>
  )
}

export default NotificationButton