import { ReadTags } from '@/core/utils/ReadTags';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'This is my blog. I will share about my life, my experiences, and my knowledge.',
};

export type Tags = {
    tag: string;
    count: number;
};

export default function page() {
    const tags: Tags[] = ReadTags();

    return (
        <div className='flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
            <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
                <h1 className=' md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-5 md:text-6xl'>
                    Tags
                </h1>
            </div>
            <div className='flex max-w-lg flex-wrap'>
                {tags.map((tag, key) => {
                    return (
                        <div className='mb-2 mr-5 mt-2' key={key}>
                            <Link
                                href={`/tags/${tag.tag}`}
                                className='mr-3 text-sm font-medium uppercase text-green-500 hover:text-green-600 dark:hover:text-green-400'
                            >
                                {tag.tag}{' '}
                            </Link>
                            <Link
                                href={`/tags/${tag.tag}`}
                                className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                            >
                                ({tag.count})
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
