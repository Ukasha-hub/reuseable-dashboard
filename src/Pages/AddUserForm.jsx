import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddUserForm = () => {
  const { id } = useParams(); // get user id from URL
  console.log("Editing user ID:", id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      const stored = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = stored.find(user => user.id.toString() === id);
      if (existingUser) {
        setFormData(existingUser);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('users')) || [];

    if (id) {
      // Edit mode
      const updated = stored.map(user =>
        user.id.toString() === id ? { ...formData, id: user.id } : user
      );
      localStorage.setItem('users', JSON.stringify(updated));
    } else {
      // Add mode
      const newUser = { id: Date.now(), ...formData };
      stored.push(newUser);
      localStorage.setItem('users', JSON.stringify(stored));
    }

    navigate('/settings/users');
  };
  return (
    <div>
        <section className="p-6 bg-base-300 dark:text-gray-900">
            <form noValidate="" action="" onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                <fieldset className=" gap-6 p-6 rounded-md shadow-sm bg-base-100">
                    <div className="space-y-2 col-span-full lg:col-span-1 pb-5">
                        <p className="font-medium text-lg">{id ? 'Edit User' : 'Add User'}</p>
                        
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Name</label>
                            <input id="firstname" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75  dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Job Title</label>
                            <input id="lastname" name="jobTitle" type="text" value={formData.jobTitle} onChange={handleChange} placeholder="Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="number" className="text-sm">Contact No.</label>
                            <input id="number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Cotact No." className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 border border-gray-400 p-3" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full rounded-md  dark:text-gray-50  border border-gray-400 p-3" />
                        </div>
                        {/* Image Upload */}
                        <div className='col-span-full sm:col-span-3'>
                            <label className="text-sm">Upload Image</label>
                            <fieldset className="fieldset">
                        
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="file-input w-full rounded-md "
                            />
                            </fieldset>

                            {formData.image && (
                                <img src={formData.image} alt="Preview" className="w-20 h-20 mt-2 rounded-full" />
                            )}
                        </div>
                        
                       
                    </div>
                    
                    <button type="submit" className='btn bg-green-200 w-full mt-7'>Save</button>
                </fieldset>
                
            </form>
        </section>
    </div>
  )
}

export default AddUserForm