import React from 'react';

const AppDetailsPage = async({ params }) => {
    const { id } = await params;
    console.log(id, 'params');
    
    return (
        <div>
            <h2>App Details</h2>
        </div>
    );
};

export default AppDetailsPage;