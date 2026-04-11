import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen bg-purple-200 text-center flex justify-center items-center'>
            <div className=''>
                <h2 className='text-4xl font-bold'>Page Not Found</h2>
                <p className='text-xl font-bold'>The page you are looking for does not exist.</p>
                <Link href='/' className="btn btn-primary">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;