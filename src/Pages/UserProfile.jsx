import React, { useEffect, useState } from 'react';
import ProfileCard from '../Components/ProfileCard';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumb';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  useEffect(() => {
    if (id) {
      const stored = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = stored.find(user => user.id.toString() === id);
      if (existingUser) {
        setUser(existingUser);
      }
    }
  }, [id]);

  if (!user) return <div className="p-4 text-center">User not found.</div>;

  return (
    <div className="p-4">
      <div className='flex flex-row justify-between'>
      <Breadcrumbs location={location} pathnames={pathnames} />
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate(-1)} // Go back to previous page
      >
        ← Back
      </button>
      </div>
      
      <ProfileCard
        key={user.id}
        name={user.name}
        image={user.image}
        jobTitle={user.jobTitle}
        phone={user.phone}
        email={user.email}
        address={user.address}
      />
    </div>
  );
};

export default UserProfile;
