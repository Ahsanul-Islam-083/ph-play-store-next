'use client';
import InstalledAppsProvider from '@/context/install.context';
import React from 'react';

const Provider = ({ children }) => {
    return (

        <InstalledAppsProvider>
            {children}
        </InstalledAppsProvider>

    );
};

export default Provider;