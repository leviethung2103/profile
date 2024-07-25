import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function index({ tags }: { tags: string[] }) {
    return (
        <div>
            <div className='pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700'>
                <div className='flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                        <img
                            src='https://avatars.githubusercontent.com/u/16741872?v=4'
                            className=' h-10 w-10 rounded-full'
                        />
                        <div className='flex flex-col items-center justify-center whitespace-nowrap text-sm font-medium leading-5'>
                            <div className='text-gray-900 dark:text-gray-100'>
                                Hung
                            </div>
                            <div className='text-green-500'>
                                <a href='https://www.facebook.com/hungpro8800/'>
                                    @Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                <div className='py-4 xl:py-8'>
                    <div className='text-center'>TAGS</div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-2'>
                        {tags.map((tag) => (
                            <Link
                                href={`/tags/${tag}`}
                                key={tag}
                                className='text-md py-1 text-center font-bold uppercase text-green-500 dark:text-green-300'
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
