import React from 'react';

const AppDetailsLayout = ({ children }) => {
    return (
        <div>
            <h2 className='bg-blue-500 text-white p-4 text-center'>Navbar 2 for app details (nested layout)</h2>
            {children}
        </div>
    );
};

export default AppDetailsLayout;