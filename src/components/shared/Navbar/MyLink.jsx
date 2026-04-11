"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, text}) => {
    const pathName = usePathname();
    return (
        <div>
            <Link href={href}>
                {text}
            </Link>
        </div>
    );
};

export default MyLink;