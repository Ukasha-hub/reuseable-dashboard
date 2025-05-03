import DarkLightTheme from "./DarkLightTheme"
import NotificationButton from "./NotificationButton"


const Topbar = () => {
    
  return (
    <div className=" sticky top-0 z-60 ">
        <div className="navbar bg-base-100 border border-base-300 flex flex-row justify-between   lg:px-5 md:px-4 ">
            <div className="flex">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>
                <a className="btn btn-ghost text-xl">Dashboard</a>
                
            </div>
            <div className="flex flex-row  lg:gap-3 md:gap-2 gap-0">
                <DarkLightTheme></DarkLightTheme>

                <NotificationButton></NotificationButton>

                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn lg:btn-md btn-xs btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
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
                <p className="hidden  lg:block">hello, mmmm</p>
            </div>
            </div>
    </div>
  )
}

export default Topbar