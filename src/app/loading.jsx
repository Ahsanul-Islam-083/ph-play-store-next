import React from 'react';
import { BarLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen font-bold text-5xl bg-purple-200">
                {/* <HashLoader color="#ad46ff" /> */}
                {/* <BarLoader color="#ad46ff" /> */}
                {/* <span className="loading loading-bars loading-xl text-primary"></span> */}
                Global Loading...
            </div>

        </div>
    );
};

export default loading;