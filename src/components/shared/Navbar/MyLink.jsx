"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, text}) => {
    const pathName = usePathname();
    return (
        <div>
            <Link className={` pb-0.5 font-semibold ${pathName === href ? 'text-purple-500 border-b rounded-md' : ''}`} href={href}>
                {text}
            </Link>
        </div>
    );
};

export default MyLink;