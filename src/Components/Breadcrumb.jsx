
import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({location, pathnames}) => {
  return (
    <div>
         <div className="text-sm breadcrumbs mb-4">
            <ul>
                <li><Link to="/">Home</Link></li>
                {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <li key={to}>
                    
                        <span className="text-gray-500 capitalize">{value}</span>
                   
                    </li>
                );
                })}
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumb