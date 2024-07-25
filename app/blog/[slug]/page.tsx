import Author from '@/components/Author';
import BlogContent from '@/components/BlogContent';
import { ReadData } from '@/core/utils/ReadData';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateStaticParams = async () => {
    const blog = ReadData();

    return blog.map((item, index) => ({
        params: { slug: item.data.slug },
    }));
};

export default function page({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const blog = ReadData().findIndex((item) => item.data.slug === params.slug);
    if (blog === -1) {
        return notFound();
    }

    const data = ReadData().find((item) => item.data.slug === params.slug);

    return (
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
            <header className='pt-6 xl:pb-6'>
                <div className='space-y-1 text-center'>
                    <dl className='space-y-10'>
                        <div>
                            <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                                <time dateTime={data?.data.date}>
                                    {data?.data.date}
                                </time>
                            </dd>
                        </div>
                    </dl>
                    <div>
                        <h1 className='md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl'>
                            {data?.data.title}
                        </h1>
                    </div>
                </div>
            </header>
            <div className='w-full dark:text-white'>
                <div className='dark:prose-dark prose flex max-w-none flex-col items-center justify-between pb-8 md:flex-row'></div>
                <div className='flex w-full'>
                    <div className='hidden h-full w-[160px] md:block'>
                        <Author tags={data?.data.tags!} />
                    </div>
                    <div className='w-full px-4'>
                        <BlogContent content={data?.content!} />
                    </div>
                </div>
            </div>
        </div>
    );
}
