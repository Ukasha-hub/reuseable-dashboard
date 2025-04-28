
  import { FaArrowUp } from "react-icons/fa";
  import { IoCubeOutline } from "react-icons/io5";

  import { FaUserGroup } from "react-icons/fa6";
  import { FaArrowDown } from "react-icons/fa";

  
export default function EcommerceMetrics() {
    return (
      <div className="flex flex-col flex-grow gap-4 p-4">
        {/* <!-- Metric Item Start --> */}
        <div className="rounded-2xl border border-gray-200 bg-base-100 p-5 dark:border-gray-800  md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <FaUserGroup className="text-gray-800 size-6 dark:text-white/90" />
          </div>
  
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-base-500">
                Customers
              </span>
              <h4 className="mt-2 font-bold text-base-500">
                3,782
              </h4>
            </div>
            
              <FaArrowUp />
              11.01%
            
          </div>
        </div>
        {/* <!-- Metric Item End --> */}
  
        {/* <!-- Metric Item Start --> */}
        <div className="rounded-2xl border border-gray-200 bg-base-100 p-5 dark:border-gray-800  md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <IoCubeOutline className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-base-500">
                Orders
              </span>
              <h4 className="mt-2 font-bold text-base-800 text-title-sm ">
                5,359
              </h4>
            </div>
  
          
              <FaArrowDown/>
              9.05%
           
          </div>
        </div>
        {/* <!-- Metric Item End --> */}
      </div>
    );
  }