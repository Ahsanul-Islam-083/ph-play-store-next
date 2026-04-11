import React from 'react';

const AppsLoading = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                {/* <HashLoader color="#ad46ff" /> */}
                {/* <BarLoader color="#ad46ff" /> */}
                <span className="loading loading-bars loading-xl text-primary"></span>
                {/* Global Loading... */}
            </div>
        </div>
    );
};

export default AppsLoading;