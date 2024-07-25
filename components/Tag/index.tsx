import Link from 'next/link';
import React from 'react';

export default function index({ text }: { text: string }) {
    return (
        <Link
            href={`/tags/${text}`}
            className='mr-3 text-sm font-medium uppercase text-green-500 hover:text-green-600 dark:hover:text-green-400'
        >
            {text.split(' ').join('-')}
        </Link>
    );
}
