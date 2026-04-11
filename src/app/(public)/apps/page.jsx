import TrendingApps from '@/components/homepage/TrendingApps';
import React from 'react';

export const metadata = {
  title: "Apps Page | PH Play Store",
  description: "This is an application management site",
};

const AppsPage = () => {
    return (
        <div>
            <h2>
                <TrendingApps from="apps"/>
            </h2>
        </div>
    );
};

export default AppsPage;