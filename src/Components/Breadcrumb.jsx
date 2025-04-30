import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <div className="text-sm breadcrumbs mb-4">
      <ul>
        <li><Link to="/">Home</Link></li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          // Check if current segment is "edit" and followed by an ID
          const isEditWithID = value.toLowerCase() === 'edit' && pathnames[index + 1];

          return (
            <li key={to}>
              {isLast || isEditWithID ? (
                <span className="text-gray-500 capitalize">{value}</span>
              ) : (
                <Link to={to} className="capitalize">{value}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
