import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import Menu from './menu';
import ThemeSwitch from './ThemeSwitch';

export default function index() {
    return (
        <header className='flex items-center justify-between py-10'>
            <Logo />
            <div className='flex items-center space-x-4 leading-5 sm:space-x-6'>
                <Link
                    href='/blog'
                    className='hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
                >
                    Blog
                </Link>
                <Link
                    href='/tags'
                    className='hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
                >
                    Tags
                </Link>
                <Link
                    href='/about'
                    className='hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
                >
                    About
                </Link>
                <ThemeSwitch />
                <Menu />
            </div>
        </header>
    );
}
