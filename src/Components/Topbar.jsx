import DarkLightTheme from "./DarkLightTheme"
import NotificationButton from "./NotificationButton"


const Topbar = () => {
    
  return (
    <div>
        <div className="navbar bg-base-100 dark:shadow-white shadow-black lg:px-5 md:px-4 shadow-sm">
            <div className="flex-1">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden ">
                    Open drawer
            </label>
                <a className="btn btn-ghost text-xl">Dashboard</a>
                
            </div>
            <div className="flex flex-row lg:gap-3 md:gap-2 gap-0">
                <DarkLightTheme></DarkLightTheme>

                <NotificationButton></NotificationButton>

                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
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
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li className><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
                <p className="hidden md:block lg:block">hello, mmmm</p>
            </div>
            </div>
    </div>
  )
}

export default Topbar