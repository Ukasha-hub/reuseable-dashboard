import React from 'react'

const AddUserForm = () => {
  return (
    <div>
        <section className="p-6 bg-base-300 dark:text-gray-900">
            <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className=" gap-6 p-6 rounded-md shadow-sm bg-base-100">
                    <div className="space-y-2 col-span-full lg:col-span-1 pb-5">
                        <p className="font-medium text-lg">Add User</p>
                        
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Name</label>
                            <input id="firstname" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75  dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Job Title</label>
                            <input id="lastname" type="text" placeholder="Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="number" className="text-sm">Contact No.</label>
                            <input id="number" type="number" placeholder="Cotact No." className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="Address" className="w-full rounded-md  text-gray-50  border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full mt-5">
                            <label htmlFor="bio" className="text-lg">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src="https://i.pravatar.cc/300" alt="" className="w-20 h-20 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                            </div>
                        </div>
                       
                    </div>
                    
                    <button className='btn bg-green-200 w-full mt-7'>Save</button>
                </fieldset>
                
            </form>
        </section>
    </div>
  )
}

export default AddUserForm